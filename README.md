<p align="center">
 <a href="https://rahulaher.netlify.app">
  <img src="https://rahulaher.netlify.app/img/logo/glyph-black-colored.svg" alt="Take care soon" width="250" />
 </a>
</p>


# RDS Design System Example Project

Welcome to the example project showcasing how to integrate and use the RDS (Rahul's Design System) in your Vue.js projects. This guide will walk you through the steps to get started with RDS, from installation to usage, ensuring a smooth integration process.

## Introduction to RDS

RDS is a powerful and flexible design system built with Vue.js, aimed at providing a consistent and efficient way to develop user interfaces. With a collection of reusable components and styles, RDS helps streamline your development process, ensuring your applications have a cohesive look and feel.

## The Journey of RDS

### How It All Started

The idea for RDS came from my own experience as a frontend developer. I found myself repeatedly creating similar components and styles for different projects. This repetitive work not only consumed a lot of time but also made it challenging to maintain consistency across various applications. I realized the need for a centralized design system that could be reused across projects to ensure a uniform user experience.

### The Problem It Solves

1. **Consistency**: One of the primary challenges in frontend development is maintaining consistency in UI elements across different parts of an application or across multiple projects. RDS addresses this by providing a standardized set of components that can be reused, ensuring a cohesive look and feel.
2. **Efficiency**: Rewriting similar components for different projects is time-consuming. RDS saves developers time by offering pre-built, customizable components, allowing them to focus more on the unique aspects of their projects rather than reinventing the wheel.
3. **Scalability**: As projects grow, maintaining and updating individual components can become cumbersome. With RDS, updates and improvements can be made in a single place and propagated across all projects that use the design system, making it easier to scale and maintain applications.
4. **Collaboration**: In teams, having a shared design system fosters better collaboration between developers and designers. RDS provides a common language and set of tools that everyone can use, reducing misunderstandings and increasing productivity.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher) or Yarn (v1.22 or higher)
- Vue.js (v2.x or v3.x)

## NPM Package

[@aherrahul/design-system](https://www.npmjs.com/package/@aherrahul/design-system)

## Getting Started

### Step 1: Install RDS

To use RDS in your Vue.js project, you first need to install it via npm. Open your terminal and run the following command:

```bash
npm install @aherrahul/design-system
```

Alternatively, if you prefer using Yarn, you can run:

```bash
yarn add @aherrahul/design-system
```

### Step 2: Import RDS in Your Project

Once the installation is complete, you need to import RDS into your Vue.js project. This can be done in your main JavaScript file (usually main.js or main.ts).

For Vue 2:

```javascript
import Vue from 'vue';
import App from './App.vue';
import RDS from '@aherrahul/design-system';
import '@aherrahul/design-system/dist/style.css';

Vue.use(RDS);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

For Vue 3:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import RDS from '@aherrahul/design-system';
import '@aherrahul/design-system/dist/style.css';

const app = createApp(App);
app.use(RDS);
app.mount('#app');
```

### Step 3: Using RDS Components

Now that RDS is installed and configured, you can start using its components in your Vue.js project. Here's an example of how to use a button component from RDS:

```vue
<template>
  <div id="app">
    <rds-button
      variant="green"
      size="md"
      text="Lorem Ipsum"
      @click="handleClick"
    />
  </div>
</template>

<script setup>
const handleClick = () => {
  alert('Button clicked!');
};
</script>

<style>
/* Add any custom styles here */
</style>
```

### Step 4: Customizing RDS Components

RDS components are designed to be easily customizable. You can pass props to the components to change their appearance and behavior. For example, to customize the button component:

```vue
<template>
  <div id="app">
    <rds-button
      :variant="btnColor"
      :size="btnSize"
      :text="btnText"
      @click="handleClick"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const btnColor = ref('red');
const btnSize = ref('md');
const btnText = ref('Button');

const handleClick = () => {
  alert('Button Alert');
};
</script>

<style>
/* Add any custom styles here */
</style>
```

### Step 5: Exploring More Components

RDS comes with a wide range of components that you can use to build your application. Check out the [official documentation](https://rds-design-system.netlify.app/) for a complete list of available components and their usage examples.

## Documentation: Your Ultimate Guide

The RDS documentation is created using Storybook, providing a comprehensive and interactive way to explore and understand the design system. Here are some of the benefits of the documentation:

1. **Interactive Demos**: Each component is documented with interactive demos, allowing you to see the component in action and play around with its properties.
2. **Usage Examples**: Detailed usage examples show how to integrate and use each component in your project, making it easy to get started.
3. **Customization Options**: The documentation includes information on the various customization options available for each component, helping you tailor them to fit your specific needs.
4. **API Reference**: A thorough API reference is provided for each component, including details on all available props, events, and slots.
5. **Design Guidelines**: The documentation also covers design guidelines and best practices for using the components, ensuring your application maintains a consistent and professional look.

## Conclusion

Integrating RDS into your Vue.js project is a straightforward process that can greatly enhance your development workflow. With its reusable components and consistent design language, RDS helps you build polished and professional applications efficiently. [Demo project/Starter-pack](https://github.com/AherRahul/RDS-design-system-example)

We hope this guide helps you get started with RDS. If you have any questions or feedback, feel free to leave a comment below or reach out to us on [GitHub](https://github.com/AherRahul/design-system).
