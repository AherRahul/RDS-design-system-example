<template>
    <div class="containers">
      <div class="container-fluid">
        <div class="containers-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Containers Component's</h1>
              <p>
                The Container Components page in our design system showcases a variety of fundamental 
                UI elements crafted to structure and organize content within your applications. These 
                Vue.js components provide the building blocks for creating flexible and responsive 
                layouts. Each component is meticulously documented using Storybook, offering detailed 
                instructions for implementation and customization to meet your specific needs.
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
    .containers {
      min-height: 100%;
      display: flex;
      align-items: center;
    }
  }
  </style>
  