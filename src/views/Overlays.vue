<template>
    <div class="overlays">
      <div class="container-fluid">
        <div class="overlays-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Overlays Component's</h1>
              <p>
                The Overlays Components page in our design system features a collection of crucial UI 
                elements designed to create layered interfaces and enhance user interaction. These 
                Vue.js components, including modals, tooltips, and popovers, provide effective solutions 
                for displaying additional content and information. Each component is meticulously documented 
                using Storybook, offering detailed guidance for implementation and customization to meet 
                the specific needs of your applications.
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
    .overlays {
      min-height: 100%;
      display: flex;
      align-items: center;
    }
  }
  </style>
  