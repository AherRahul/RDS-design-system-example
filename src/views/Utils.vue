<template>
    <div class="utils">
      <div class="container-fluid">
        <div class="utils-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Utils Component's</h1>
              <p>
                The Utils Components page in our design system highlights a range of versatile UI elements 
                designed to support and enhance the functionality of your applications. These Vue.js 
                components offer various utilities to streamline development and improve efficiency. 
                Each component is thoroughly documented using Storybook, providing detailed guidance 
                for implementation and customization to suit your unique needs.
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
    .utils {
      min-height: 100%;
      display: flex;
      align-items: center;
    }
  }
  </style>
  