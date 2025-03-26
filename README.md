# BMI Calculator (Calculadora IMC)

This exercise is a ReactJS application that calculates the Body Mass Index (BMI) based on the height (in centimeters) and weight (in kilograms) provided by the user. It displays the calculated BMI value and its classification according to the BMI categories.

- You can visit the live site here: https://imc-calculator-react-alpha.vercel.app/
  
![image](https://github.com/user-attachments/assets/e7eadd02-d357-45d7-bacd-f8b8af2d0dd9)



## Technologies Used

- **ReactJS**: The main library used to build the user interface and handle the application logic.
- **CSS Modules**: For styling individual components.
- **Global CSS**: For overall application styling.
- **useState**: To manage the state of the height, weight, and BMI.
- **useEffect**: To handle side-effects, such as recalculating the BMI when the user changes their input.

## Features

- **User Inputs**: The user can input their height (in cm) and weight (in kg).
- **IMC Calculation**: The application calculates the BMI based on the formula:  
  \[ \text{BMI} = \frac{\text{weight (kg)}}{\text{height (m)}^2} \]
- **BMI Classification**: After the BMI is calculated, it is classified according to the following ranges:
  - Underweight: BMI < 18.5
  - Normal weight: 18.5 ≤ BMI < 24.9
  - Overweight: 25 ≤ BMI < 29.9
  - Obesity (Grade 1): 30 ≤ BMI < 34.9
  - Obesity (Grade 2): 35 ≤ BMI < 39.9
  - Obesity (Grade 3): BMI ≥ 40

## How It Works

1. **Formulario (Form)**: 
   - This component accepts two inputs from the user: height (in centimeters) and weight (in kilograms).
   - It uses the `useState` hook to store the values of these inputs.
   - It also uses the `useEffect` hook to calculate the BMI whenever the height or weight changes, and then passes the calculated BMI value to the parent component.

2. **Resultado (Result)**: 
   - This component receives the calculated BMI as a prop.
   - It checks if the BMI exists, then classifies it into one of the categories based on the value.
   - It displays the calculated BMI and the classification to the user.

3. **App Component**: 
   - The App component is the main entry point of the application. It manages the state of the BMI and passes the `setImc` function to the Form component as a prop.
   - It conditionally renders the Resultado component if the BMI value exists.


## Installation

To get the project running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/deborasete/imc-calculator-react.git

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

## Developed by:  


- LinkedIn: [Debora Sete](https://www.linkedin.com/in/debora-sete/)
- Email: [sete.debora@gmail.com](mailto:sete.debora@gmail.com)


