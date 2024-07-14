<template>
    <div class="loaders">
      <div class="container-fluid">
        <div class="loaders-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Loaders Component's</h1>
              <p>
                The Loaders Components page in our design system presents a collection of essential 
                UI elements designed to indicate loading states and enhance user experience during 
                data processing. These Vue.js components provide visually appealing and functional 
                loaders to keep users informed and engaged. Each component is thoroughly documented 
                using Storybook, offering detailed guidance for implementation and customization to 
                fit your application's specific needs.
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
    .loaders {
      min-height: 100%;
      display: flex;
      align-items: center;
    }
  }
  </style>
  