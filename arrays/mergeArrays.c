#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>
#include <stdlib.h>

// Function to check if a string is a valid positive integer
bool is_valid_number(const char *str) {
    if (str == NULL || strlen(str) == 0) return false;

    for (int i = 0; str[i]; i++) {
        if (!isdigit(str[i])) return false;
    }

    return true;
}

// Function to safely get a valid positive integer from the user
int get_valid_number(const char *prompt) {
    char buffer[100];
    int number;

    while (1) {
        printf("%s", prompt);
        fgets(buffer, sizeof(buffer), stdin);
        buffer[strcspn(buffer, "\n")] = '\0'; // Remove newline

        if (is_valid_number(buffer)) {
            number = atoi(buffer);
            if (number > 0) {
                return number;
            }
        }

        printf("Invalid input. Please enter a positive number.\n");
    }
}

// Function to check if a string is valid (only letters and spaces)
bool is_valid_string(const char *str) {
    if (str == NULL || strlen(str) == 0) return false;

    for (int i = 0; str[i]; i++) {
        if (!isalpha(str[i]) && str[i] != ' ') return false;
    }

    return true;
}

// Function to input animals
void get_animals(char animals[][100], int count, const char *type) {
    char temp[100];
    int index = 0;

    while (index < count) {
        printf("Enter %s animal %d: ", type, index + 1);
        fgets(temp, sizeof(temp), stdin);
        temp[strcspn(temp, "\n")] = '\0'; // Remove newline

        if (is_valid_string(temp)) {
            strcpy(animals[index], temp);
            index++;
        } else {
            printf("nvalid name. Please use only letters and spaces.\n");
        }
    }
}

int main() {
    int wild_count = get_valid_number("Enter number of wild animals: ");
    int domestic_count = get_valid_number("Enter number of domestic animals: ");

    // Create arrays to hold the names
    char wild_animals[wild_count][100];
    char domestic_animals[domestic_count][100];
    char merged_animals[wild_count + domestic_count][100];

    // Input with validation
    get_animals(wild_animals, wild_count, "wild");
    get_animals(domestic_animals, domestic_count, "domestic");

    // Merge both arrays
    for (int i = 0; i < wild_count; i++) {
        strcpy(merged_animals[i], wild_animals[i]);
    }
    for (int i = 0; i < domestic_count; i++) {
        strcpy(merged_animals[wild_count + i], domestic_animals[i]);
    }

    // Print merged animals
    printf("\nMerged animal list:\n");
    for (int i = 0; i < wild_count + domestic_count; i++) {
        printf("%s\n", merged_animals[i]);
    }

    return 0;
}