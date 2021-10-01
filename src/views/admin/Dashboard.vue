<template>
  <div id="home">
    <!-- breadcrumb -->
    <nav class="mb-6 text-sm font-semibold" aria-label="Breadcrumb">
      <ol class="inline-flex p-0 list-none">
        <li class="flex items-center text-blue-500">
          <a href="#" class="text-gray-700">Home</a>
          <svg
            class="w-3 h-3 mx-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </li>
        <li class="flex items-center">
          <a href="#" class="text-gray-600">Dashboard</a>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <div class="items-center justify-between mb-6 lg:flex">
      <p class="mb-2 text-2xl font-semibold lg:mb-0">
        Good afternoon, Joe Emako!
      </p>
      <button
        class="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow  hover:bg-blue-600 focus:outline-none"
      >
        View Logs
      </button>
    </div>
    <div class="flex flex-wrap mb-20 -mx-3">
      <div class="w-1/2 px-3 xl:w-1/4">
        <div
          class="flex items-center w-full p-6 text-blue-200 bg-white border rounded-lg shadow "
        >
          <svg
            class="hidden w-16 h-16 mr-4 fill-current lg:block"
            view
            shadow="0 0 20 20"
          >
            <path
              d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"
            ></path>
          </svg>
          <div class="text-gray-700">
            <p class="text-3xl font-semibold">31</p>
            <p>New Enquiries</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 px-3 xl:w-1/4">
        <div
          class="flex items-center w-full p-6 text-blue-200 bg-white border rounded-lg shadow "
        >
          <svg
            class="hidden w-16 h-16 mr-4 fill-current lg:block"
            view
            shadow="0 0 20 20"
          >
            <path
              d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"
            ></path>
          </svg>
          <div class="text-gray-700">
            <p class="text-3xl font-semibold">31</p>
            <p>New Enquiries</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 px-3 xl:w-1/4">
        <div
          class="flex items-center w-full p-6 text-blue-200 bg-white border rounded-lg shadow "
        >
          <svg
            class="hidden w-16 h-16 mr-4 fill-current lg:block"
            view
            shadow="0 0 20 20"
          >
            <path
              d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"
            ></path>
          </svg>
          <div class="text-gray-700">
            <p class="text-3xl font-semibold">31</p>
            <p>New Enquiries</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 px-3 xl:w-1/4">
        <div
          class="flex items-center w-full p-6 text-blue-200 bg-white border rounded-lg shadow "
        >
          <svg
            class="hidden w-16 h-16 mr-4 fill-current lg:block"
            view
            shadow="0 0 20 20"
          >
            <path
              d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"
            ></path>
          </svg>
          <div class="text-gray-700">
            <p class="text-3xl font-semibold">31</p>
            <p>New Enquiries</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3">
      <div class="w-full px-3 shadow xl:w-1/3">
        <p class="mb-4 text-xl font-semibold">Recent Sales</p>
        <div class="w-full p-4 mb-8 bg-white border rounded-lg xl:mb-0">
          <canvas id="buyers-chart" width="600" height="400"></canvas>
        </div>
      </div>
      <div class="w-full px-3 shadow xl:w-1/3">
        <p class="mb-4 text-xl font-semibold">Recent Reviews</p>
        <div class="w-full p-4 mb-8 bg-white border rounded-lg xl:mb-0">
          <canvas id="reviews-chart" width="600" height="400"></canvas>
        </div>
      </div>
      <div class="w-full px-3 shadow xl:w-1/3">
        <p class="mb-4 text-xl font-semibold">Recent Transactions</p>
        <div class="w-full p-4 bg-white border rounded-lg">
          <div
            class="flex items-center justify-between w-full px-4 py-2 mb-4 bg-gray-100 border rounded-lg "
          >
            <div>
              <p class="text-xl font-semibold">Trent Murphy</p>
              <p>Product 1</p>
            </div>
            <span class="text-lg font-semibold text-green-500">$25.00</span>
          </div>
          <div
            class="flex items-center justify-between w-full px-4 py-2 mb-4 bg-gray-100 border rounded-lg "
          >
            <div>
              <p class="text-xl font-semibold">Joseph Brent</p>
              <p>Product 34</p>
            </div>
            <span class="text-lg font-semibold text-red-500">$74.99</span>
          </div>
          <div
            class="flex items-center justify-between w-full px-4 py-2 mb-4 bg-gray-100 border rounded-lg "
          >
            <div>
              <p class="text-xl font-semibold">Jacob Bator</p>
              <p>Product 23</p>
            </div>
            <span class="text-lg font-semibold text-green-500">$14.95</span>
          </div>
          <div
            class="flex items-center justify-between w-full px-4 py-2 bg-gray-100 border rounded-lg "
          >
            <div>
              <p class="text-xl font-semibold">Alex Mason</p>
              <p>Product 66</p>
            </div>
            <span class="text-lg font-semibold text-green-500">$44.99</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js';
export default {
  name: 'DashboardHome',
  data() {
    return {
      buyersData: {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              backgroundColor: 'rgba(99,179,237,0.4)',
              strokeColor: '#63b3ed',
              pointColor: '#fff',
              pointStrokeColor: '#63b3ed',
              data: [203, 156, 99, 251, 305, 247, 256],
            },
            {
              backgroundColor: 'rgba(198,198,198,0.4)',
              strokeColor: '#f7fafc',
              pointColor: '#fff',
              pointStrokeColor: '#f7fafc',
              data: [86, 97, 144, 114, 94, 108, 156],
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
      },
      reviewsData: {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              backgroundColor: 'rgba(99,179,237,0.4)',
              strokeColor: '#63b3ed',
              pointColor: '#fff',
              pointStrokeColor: '#63b3ed',
              data: [203, 156, 99, 251, 305, 247, 256],
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
      },
    };
  },
  mounted() {
    new Chart(document.getElementById('buyers-chart'), this.buyersData);
    new Chart(document.getElementById('reviews-chart'), this.reviewsData);
  },
};
</script>
