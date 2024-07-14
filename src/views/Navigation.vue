<template>
    <div class="navigation">
      <div class="container-fluid">
        <div class="navigation-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Navigation Component's</h1>
              <p>
                The Navigation Components page in our design system offers a comprehensive suite of 
                essential UI elements designed to facilitate smooth and intuitive navigation within 
                your applications. These Vue.js components enable users to move effortlessly through 
                your app's interface. Detailed documentation in Storybook provides extensive guidance 
                for implementation and customization, ensuring each component can be tailored to your 
                precise requirements.
              </p>

              <p>
                Explore the different components as well and their configurations to find the best 
                fit for your data visualization needs. Each component is accompanied by comprehensive 
                documentation and examples to help you get started quickly and efficiently.
              </p>
            </div>
          </rds-row>
        </div>

        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  

      </div>
      
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .navigation {
      min-height: 100%;
      display: flex;
      align-items: center;
    }
  }
  </style>
  