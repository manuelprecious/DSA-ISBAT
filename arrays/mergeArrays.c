// Online C compiler to run C program online
#include <stdio.h>
#include <string.h>

int main() {

    char *wild_animals[] = {"Lion", "Tiger", "Guinea Pig", "Elephant"};
    char *domestic_animals[] = {"Cat", "Cow", "Dog", "Goat"};
    char *new_animals[8];
    int wild_animal_size = 4;
    
    
    for(int i = 0; i < 4; i++)
    {
        //printf("%s\n", domestic_animals[i]);
        new_animals[i] = wild_animals[i];
        new_animals[i + wild_animal_size] = domestic_animals[i];
    }
    
    for(int i = 0; i < 8; i++)
    {
        printf("%s\n", new_animals[i]);
    }

    // Write C code here
    //printf("Try programiz.pro");

    return 0;
}