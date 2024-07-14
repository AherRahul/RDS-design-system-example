<template>
  <div class="home">
    <div class="container-fluid">
      <!-- Content here -->
      <div class="home-header">
        <rds-row>
          <div class="header-content">
            <h1>RDS - Welcome to RDS</h1>
            <p>
              RDS, which stands for Rahul Aher's Design System, represents the culmination of our fundamental 
              principles and unwavering commitment to design excellence, implementation integrity, and user-centric 
              innovation. This meticulously crafted framework serves as the bedrock of our design philosophy, 
              offering a cohesive blueprint for developing seamless and engaging user interfaces across all our digital products.
              At its core, RDS is more than just a collection of design guidelines - it is a comprehensive ecosystem 
              designed to foster intuitive interactions and ensure consistency in every facet of our user experience. 
              By encapsulating our collective expertise and best practices, RDS empowers our teams to deliver products 
              that not only meet but exceed user expectations, blending aesthetics with functionality seamlessly.
            </p>
          </div>
        </rds-row>
      </div>
      <div class="mt-3 pi-1">
        <div>
          <div>
            <h2><strong>Principles:</strong></h2>
            <rds-divider :width="0" />
          </div>
        </div>
        <div class="row mt-1">
          <div class="col">
            <rds-grid>
              <rds-row>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <div>
                    <h4>Context over consistency</h4>
                  </div>
                  <div>
                    <p>Consistency and standards are important for building a unified design 
                      language and help the user know what to expect from our product and how 
                      to use it. However, this does not mean sacrificing the user experience. 
                      In this sense, the context and needs of our users are priorities when 
                      developing our solutions.
                    </p>
                  </div>
                </rds-col>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <div>
                    <h4>Usable</h4>
                  </div>
                  <div>
                    <p>Users and their needs drive our design process. For us, being usable 
                      means being built with empathy, reaching users' real needs and problems 
                      by putting ourselves in their shoes and looking at their world with 
                      attention and care. To achieve these results, we carry out research, 
                      analyze data and always listen to it.
                    </p>
                  </div>
                </rds-col>
              </rds-row>
            </rds-grid>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col">
            <rds-grid>
              <rds-row>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <div>
                    <h4>Inclusive</h4>
                  </div>
                  <div>
                    <p>We design our experiences for real people. We understand that those 
                      who use our products have different conditions and abilities. This 
                      understanding guides us in developing more humane solutions.
                    </p>
                  </div>
                </rds-col>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <div>
                    <h4>Direct</h4>
                  </div>
                  <div>
                    <p>All elements must have a purpose. These elements must provide experiences 
                      that allow people to achieve their goals quickly, efficiently and as directly 
                      as possible.
                    </p>
                  </div>
                </rds-col>
              </rds-row>
            </rds-grid>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col">
            <rds-grid>
              <rds-row>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <div class="heading-3">
                    <h4>Autonomy through empowerment</h4>
                  </div>
                  <div class="mt(10) font-weight-bold">
                    <p>We believe in the potential of people and their ability to develop the 
                      best solutions. In this way, we empower teams to feel confident when 
                      designing solutions, knowing that they will do so by ensuring the best 
                      user experience, while working on what they are passionate about doing.
                    </p>
                  </div>
                </rds-col>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" />
              </rds-row>
            </rds-grid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@include heading-3;

@media (min-width: 1024px) {
  .home {
    min-height: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 5rem;
  }
}

.mt-1 {
  margin-top: 1%;
}

.mt-3 {
  margin-top: 3%;
}

.pi-1 {
  padding-inline: 1rem;
}

</style>
