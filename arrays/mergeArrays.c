#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

// Function to check if a string is valid
bool is_valid_string(const char *str) {
    if (str == NULL || strlen(str) == 0) {
        return false;
    }

    for (int i = 0; str[i] != '\0'; i++) {
        if (!isalpha(str[i]) && str[i] != ' ') {
            return false;
        }
    }

    return true;
}

int main() {
    char wild_animals[4][20] = {"Lion", "Tiger", "Guinea Pig", "Elephant"};
    char domestic_animals[4][20] = {"Cat", "Cow", "Dog", "Goat"};
    char new_animals[8][20];
    int index = 0;

    // Validate and copy wild animals
    for (int i = 0; i < 4; i++) {
        if (is_valid_string(wild_animals[i])) {
            strcpy(new_animals[index++], wild_animals[i]);
        } else {
            printf("Invalid wild animal: %s\n", wild_animals[i]);
        }
    }

    // Validate and copy domestic animals
    for (int i = 0; i < 4; i++) {
        if (is_valid_string(domestic_animals[i])) {
            strcpy(new_animals[index++], domestic_animals[i]);
        } else {
            printf("Invalid domestic animal: %s\n", domestic_animals[i]);
        }
    }

    // Print valid animals
    printf("\nValid animals list:\n");
    for (int i = 0; i < index; i++) {
        printf("%s\n", new_animals[i]);
    }

    return 0;
}
