<template>
  <div class="home">
    <div class="container-fluid">
      <!-- Content here -->
      <div class="row">
        <div class="col">
          <div>
            <h1><strong> Welcome to RDS </strong></h1>
          </div>
          <div>
            <p>RDS is Rahul Aher's Design System. It is the materialization of all our 
              principles and foundation, encompassing our way of thinking about design, 
              implementation and care for people.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="row">
          <div class="col">
            <h4><strong>Principles:</strong></h4>
            <rds-divider />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <div class="row">
              <div class="col">
                <div>
                  <h5>Context over consistency</h5>
                </div>
                <div class="mt-3">
                  <p>Consistency and standards are important for building a unified design 
                    language and help the user know what to expect from our product and how 
                    to use it. However, this does not mean sacrificing the user experience. 
                    In this sense, the context and needs of our users are priorities when 
                    developing our solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="row">
              <div class="col">
                <div>
                  <h5>Usable</h5>
                </div>
                <div class="mt-3">
                  <p>Users and their needs drive our design process. For us, being usable 
                    means being built with empathy, reaching users' real needs and problems 
                    by putting ourselves in their shoes and looking at their world with 
                    attention and care. To achieve these results, we carry out research, 
                    analyze data and always listen to it.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <div class="row">
              <div class="col">
                <div>
                  <h5>Inclusive</h5>
                </div>
                <div class="mt-3">
                  <p>We design our experiences for real people. We understand that those 
                    who use our products have different conditions and abilities. This 
                    understanding guides us in developing more humane solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="row">
              <div class="col">
                <div>
                  <h5>Direct</h5>
                </div>
                <div class="mt-3">
                  <p>All elements must have a purpose. These elements must provide experiences 
                    that allow people to achieve their goals quickly, efficiently and as directly 
                    as possible.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <div class="row">
              <div class="col">
                <div>
                  <h5>Autonomy through empowerment</h5>
                </div>
                <div class="mt-3">
                  <p>We believe in the potential of people and their ability to develop the 
                    best solutions. In this way, we empower teams to feel confident when 
                    designing solutions, knowing that they will do so by ensuring the best 
                    user experience, while working on what they are passionate about doing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100%;
    display: flex;
    align-items: center;
  }
}

.row {
  display: flex;
}
</style>
