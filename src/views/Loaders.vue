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

        <div class="dashboard-content">
          <div class="dashboard-main">
            <rds-grid>
              <div>
                <h3>1. LoadingBar</h3>
                <p>
                  The LoadingBar component is used to indicate that the progress of an operation has not 
                  yet been completed. It is useful for providing feedback to users while they wait for a 
                  task to finish, such as loading data, submitting a form, or processing a request.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <loading-bar class="pt-3" />
                  </rds-col>
              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>2. OverlayLoader</h3>
                <p>
                  The OverlayLoader component is used to indicate the loading of internal page components, 
                  such as cards and graphics. It provides visual feedback to users, letting them know that 
                  the content they are waiting for is still loading.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <overlay-loader class="pt-3" />
                  </rds-col>
              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>3. Skeleton</h3>
                <p>
                  The Skeleton component is used to create placeholders that represent content that is 
                  loading or being processed. It is useful for improving user experience by providing 
                  visual feedback while the actual content is loading.
                </p>
              </div>
              <rds-row>
                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                    <h5>1. width="100" height="16" fluid="false" shape="square" </h5>
                    <skeleton class="pt-3"
						            :width="100"
                        :height="16"
                        :fluid="false"
                        shape="square" 
                      />
                  </rds-col>

                  <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                    <h5>2. width="100" height="16" fluid="true" shape="square" </h5>
                    <skeleton class="pt-3"
						            :width="100"
                        :height="16"
                        :fluid="true"
                        shape="square" 
                      />
                  </rds-col>

                  <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                    <h5>3. width="100" height="50" fluid="true" shape="circle" </h5>
                    <skeleton class="pt-3"
						            :width="100"
                        :height="50"
                        :fluid="true"
                        shape="circle" 
                      />
                  </rds-col>

              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>4. SkeletonText</h3>
                <p>
                  The SkeletonText component is used to display a loading state for various component types. 
                  It serves as a visual placeholder, indicating that the text content is being loaded or processed.
                </p>
              </div>
              <rds-row>
                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>1. width="250" height="25" </h5>
                    <skeleton-text class="pt-3"
						            :width="250"
                        :height="25"
                      />
                  </rds-col>

                  <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                    <h5>2. width="40" </h5>
                    <skeleton-text class="pt-3"
                        :height="40"
                      />
                  </rds-col>

                  <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                    <h5>3. default </h5>
                    <skeleton-text class="pt-3" />
                  </rds-col>

              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>5. Spinner</h3>
                <p>
                  The Spinner component is used to indicate that the progress of an operation has not yet been 
                  completed. It provides visual feedback to users, showing that a process is ongoing.
                </p>
              </div>
              <rds-row>
                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>1. variant="green" size="sm" delay="0" </h5>
                    <spinner class="pt-3"
                      variant="green"
                      size="sm"
                      delay="0"
                    />
                  </rds-col>

                  <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                    <h5>2. variant="red" size="md" delay="5" </h5>
                    <spinner class="pt-3"
                      variant="red"
                      size="md"
                      delay="5"
                    />
                  </rds-col>

                  <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                    <h5>3. variant="blue" size="lg" delay="15"</h5>
                    <spinner class="pt-3"
                      variant="blue"
                      size="lg"
                      delay="15"
                    />
                  </rds-col>

              </rds-row>
            </rds-grid>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Skeleton from '@/components/Loaders/Skeleton.vue';
  import LoadingBar from '../components/Loaders/LoadingBar.vue';
  import OverlayLoader from '../components/Loaders/OverlayLoader.vue';
  import SkeletonText from '@/components/Loaders/SkeletonText.vue';
  import Spinner from '@/components/Loaders/Spinner.vue';

  export default {
    name: 'Loaders',

    components: {
      LoadingBar,
      OverlayLoader,
      Skeleton,
      SkeletonText,
      Spinner,
    },

   data() {
      return {

      }
    },
  }

  </script>

  <style>
  @media (min-width: 1024px) {
    .loaders {
      min-height: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 10rem;
    }
  }

  .pt-3 {
    margin-top: 3rem;
  }
  </style>
  