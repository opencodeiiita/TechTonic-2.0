#include <iostream>
using namespace std;

/*
  Function: calculateFinalAmount
  Purpose : Calculates final payable amount after tax and discount.
*/

double calculateFinalAmount(double amount, int customerType) {
    //Part A

    if (amount <= 0) {
        cout << "Invalid Amount" << endl;
        return 0;
    }

    double tax = 0.18 * amount;
    double total = amount + tax;

    double tax, total;
    if(amount <= 0){
        cout << "Invalid Amount";
        return 0;
    }

    else{
        tax = 0.18*amount;
        total = tax + amount;
        return total;
    }

    //Part B
    // Discount based on customer type

    if (customerType == 1) {           // Regular Customer
        total = total * 0.95;          // 5% discount
    }
    else if (customerType == 2) {      // Premium Customer
        total = total * 0.85;          // 15% discount
    }

    return total;

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