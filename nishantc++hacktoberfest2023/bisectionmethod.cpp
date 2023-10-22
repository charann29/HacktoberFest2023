#include <iostream>
#include <cmath>

using namespace std;

double f(double x) {
    return x * x - 4; 
}

double bisection(double a, double b, double tol) {
    if (f(a) * f(b) >= 0) {
        cout << "Bisection method does not guarantee a root in the given interval." << endl;
        return -1; 

    double c;
    int iteration = 0;

    while ((b - a) >= tol) {
        
        c = (a + b) / 2;

      
        if (f(c) == 0.0) {
            cout << "Root found at x = " << c << endl;
            return c;
        }

        
        if (f(c) * f(a) < 0)
            b = c;
        else
            a = c;

        iteration++;
    }

    cout << "Root found at x = " << c << " after " << iteration << " iterations." << endl;
    return c;
}

int main() {
    double a = 0;     
    double b = 5;     
    double tol = 0.0001; 

    double root = bisection(a, b, tol);

    if (root !=-1) {
        cout << "Approximate root: " << root << endl;
    } else {
        cout << "Bisection method did not find a root within the given interval." << endl;
    }

    return 0;
}

