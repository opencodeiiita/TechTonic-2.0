#include <iostream>
using namespace std;

/*
  Function: calculateFinalAmount
  Purpose : Calculates final payable amount after tax and discount.
*/

double calculateFinalAmount(double amount, int customerType) {
    //Part A


    //Part B
}

int main() {
    double amount;
    int type;

    cout << "Enter bill amount: ";
    cin >> amount;

    cout << "Enter customer type (1-Regular, 2-Premium): ";
    cin >> type;

    double payable = calculateFinalAmount(amount, type);
    cout << "Final Payable Amount: " << payable << endl;

    return 0;
}