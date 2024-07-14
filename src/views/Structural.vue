<template>
    <div class="structural">
      <div class="container-fluid">
        <div class="structural-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Structural Component's</h1>
              <p>
                The Structural Components page in our design system showcases a variety of foundational 
                UI elements designed to create robust and scalable layouts for your applications. These 
                Vue.js components provide the essential framework for organizing and aligning content 
                seamlessly. Comprehensive documentation in Storybook ensures you have all the guidance 
                needed for implementation and customization, enabling you to adapt each component to 
                your specific project requirements.
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
    .structural {
      min-height: 100%;
      display: flex;
      align-items: center;
    }
  }
  </style>
  