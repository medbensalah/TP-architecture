# TP-architecture

## By Mohammed Ben Salah and Melek Elloumi, GL4 Group 2

## Use cases implemented
### 0- Home page
  ![alt text](https://github.com/medbensalah/TP-architecture/blob/main/image4.png?raw=true)
### 1- Visualize user vaccinatoin status
  Upon logging in, the user can enter the **state** tab to see his vaccination status
  ![alt text](https://github.com/medbensalah/TP-architecture/blob/main/image0.png?raw=true)
  ![alt text](https://github.com/medbensalah/TP-architecture/blob/main/image1.png?raw=true)
### 2- Notification system
  The user is notified of every action he takes in the website and the notification type can either be a success info or error notification
![alt text](https://github.com/medbensalah/TP-architecture/blob/main/image2.png?raw=true)
### 3- Visualize national vaccination statistics
The user can enter the **info** tab to see national vaccination statistics (number of inscriptions and of vaccinations)
![alt text](https://github.com/medbensalah/TP-architecture/blob/main/image3.png?raw=true)
### 4- Mobile application view
The application has a mobile access
![alt text](https://github.com/medbensalah/TP-architecture/blob/main/image5.png?raw=true)
## Why MVVM architecture ?
We chose MVVM because the project contains some complex views such as displaying user vaccination status along with a notification system.
It's easier to implement if we aim at a prototype/preview of our website that gets extended with time.
Plus a high portion of the code is reused between web and mobile applications.
![alt text](https://github.com/medbensalah/TP-architecture/blob/main/image6.png?raw=true)
Since we want to catch bugs early in this complex project, we need an easy approach for TDD and the ViewModels in MVVM architecture are suitable for that and let us test them on the go.

