<template>
    <div class="leftContainer">
        <div class="cityNameBox">
            <div class="cityNameBox__cityInfo">
                <span class="cityNameBox__cityInfo__cityName">{{ currentCity }}</span>
                <span class="cityNameBox__cityInfo__date">{{ currentTime }}</span>
            </div>
        </div>
        <div id="contentsBox">
            <div class="buttonBox">
                <div class="buttonBackground">
                    <button class="forecast">Forecast</button>
                    <button class="airquality">Air Quality</button>
                </div>
            </div>
            <div class="weatherBox">
                <div class="weatherDegree">
                    <p>{{ currentTemp }}&deg;</p>
                </div>
                <div class="weatherIcon">
                    <img src="../assets/images/01d.png" alt="MainLogo" />
                </div>
                <div class="weatherData">
                    <div v-for="Temp in tableData" :key="Temp.title" class="detailData">
                        <span>{{ Temp.title }}</span>
                        <span>{{ Temp.value }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="todayWeather">
            <div class="textBox">
                <p>시간대별 날씨 정보</p>
                <p>이번주 날씨 보기</p>
            </div>
            <div class="timelyWeatherBox">
                <div class="timelyWeather">
                    <div class="icon">
                        <img src="../assets/images/04n.png" alt="">
                    </div>
                    <div class="data">
                        <span class="time">2pm</span>
                        <span class="currentDegree">32&deg;</span>
                        <div>
                            <img src="../assets/images/drop.png" alt="" />
                            <span class="fall">15%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <i class="fas fa-home"></i>
            <i class="fas fa-search-location"></i>
            <i class="fas fa-chart-line"></i>
            <i class="fas fa-cog"></i>
        </nav>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import dayjs from "dayjs"
import { ref, onMounted } from 'vue'
dayjs.locale('ko');

const currentTime = ref<string>(dayjs().format("YYYY. MM. DD. ddd"));

interface List {
    title: string
    value: string
}

const tableData = ref<List[]>([
    {
        title: "습도",
        value: '89%',
    },
    {
        title: "풍속",
        value: '10m/s%',
    },
    {
        title: "체감온도",
        value: '20',
    },

])

const API_KEY = '69582e2ddb9559e69abcdba6f9923391'; // 여기에 OpenWeatherMap에서 발급받은 API 키를 입력하세요

// 서울의 위도와 경도
const lat = 37.5665;
const lon = 126.9780;

// 상태값 선언
const currentTemp = ref<string | null>(null); // 현재 기온을 저장하는 변수
const errorMessage = ref<string | null>(null); // 에러 메시지 저장 변수
const currentCity = ref<string | null>(null);

// 현재 서울의 기온을 가져오는 함수
const fetchSeoulTemperature = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    console.log(response); // 전체 응답 객체를 출력
    console.log(response.data); // 응답 데이터의 본문을 출력
    console.log(response.data.main); // 기온, 습도 등의 주요 날씨 정보를 출력
    console.log(response.data.main.temp); // 현재 기온을 출력
    
    // 현재 기온 데이터 추출
    tableData.value[0].value = response.data.main.humidity + "%";;
    tableData.value[1].value = response.data.wind.speed + 'm/s';
    tableData.value[2].value = response.data.main.feels_like.toFixed(1) + '°C';
    
    currentCity.value = response.data.name;
    currentTemp.value = response.data.main.temp.toFixed(1);
  } catch (error) {
    errorMessage.value = 'Failed to fetch temperature data';
    console.log(error);
  }
};

// 컴포넌트가 마운트될 때 기온 데이터를 가져옵니다.
onMounted(() => {
  fetchSeoulTemperature();
});
</script>

<style lang="scss">
.leftContainer {
    width: 324px;
    min-width: 324px;
    height: 700px;
    border-radius: 50px;
    background: linear-gradient(#16455f, #0e1239);
    box-shadow: 5px 5px 10px gray;

    .cityNameBox {
        width: 100%;
        height: 10%;

        &__cityInfo {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            gap: 5px;

            width: 100%;
            height: 100%;
            
            &__cityName{
                color: $color-white-000;
                font-family: 'Poppins';
                font-size: 1.35rem
            }

            &__date {
                color: rgba($color-white-000, 0.5);
            }


            // p {
            //     color: white;
            //     font-family: 'Poppins', sans-serif;
            //     line-height: 2.5;
            //     text-align: center;

            //     &:first-child {
            //         width: 241px;
            //         height: 33px;
            //         font-size: 1.35rem;
            //     }
            //     &:last-child {
            //         width: 160px;
            //         height: 19px;
            //         font-size: 0.9rem;
            //         font-weight: 100;
            //     }
            // }
        }
    }

    #contentsBox {
        width: 100%;
        height: 62.5%;

        .buttonBox {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 20%;

            .buttonBackground {
                width: 224px;
                height: 35px;
                background-color: #052137;
                border-radius: 10px;
                display: flex;

                button {
                    width: 112px;
                    height: 35px;
                    border: 0;
                    border-radius: 7.5px;
                    outline: 0;
                    cursor: pointer;

                    &.forecast {
                        background-color: #0889ff;
                        color: white;
                    }
                    &.airquality {
                        background: transparent;
                        color: #467599;
                    }
                }
            }
        }

        .weatherBox {
            width: 100%;
            height: 80%;

            .weatherDegree {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 15%;

                p {
                    font-size: 3.5rem;
                    font-weight: 500;
                    font-family: 'Be Vietnam Pro', sans-serif;
                    color: white;
                }
            }
            .weatherIcon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 60%;

                img {
                    height: 160px;
                }
            }
            .weatherData {
                color: $color-white-000;
                display: flex;
                width: 100%;
                height: 25%;

                .detailData {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 33.33%;
                    height: 100%;
                    // 레이아웃이 3개이기 때문에 동일한 레이아웃을 반복시킴을 알 수 있다.
                    &:nth-child(1) {
                        margin-left: 10px;
                    }
                    &:nth-child(2) {
                        margin-left: 0 -10px;
                    }
                    &:nth-child(3) {
                        margin-right: 10px;
                    }

                    p {
                        line-height: 1.5;
                        color: white;

                        &:first-child {
                            font-size: 1rem;
                            font-weight: 300;
                            font-family: 'Noto Sans KR', sans-serif;
                            color: #799ed0;
                        }
                        &:last-child {
                            font-size: 1rem;
                            font-weight: 200;
                            font-family: 'Poppins', sans-serif;
                        }
                    }
                }
            }
        }
    }

    #todayWeather {
        width: 100%;
        height: 17.5%;

        .textBox {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: calc(100% - 70px);
            height: 35%;
            padding: 0 35px;
            font-family: 'Noto Sans KR', sans-serif;

            p {
                font-weight: 400;
                font-size: 0.8rem;
                color: white;
                text-align: center;

                &:last-child {
                    font-weight: 400;
                    font-size: 0.8rem;
                    color: #0085ff;
                    cursor: pointer;
                    margin-bottom: 2px;
                }
            }
        }
        .timelyWeatherBox {
            display: flex;
            align-items: center;
            width: calc(100% - 70px);
            height: 65%;
            padding: 0 30px;
            overflow: scroll;

            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }

            .timelyWeather {
                display: flex;
                width: 126px;
                min-width: 126px;
                height: 70px;
                background-color: #0989ff;
                border-radius: 20px;
                margin-left: 15px;

                &:first-child {
                    margin-left: 0;
                }

                .icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 45%;
                    height: 100%;

                    img {
                        width: 100%;
                    }
                }
                .data {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: column;
                    width: 55%;
                    height: 100%;
                    color: $color-white-000;

                    .currentDegree {
                        font-size: 20px;
                    }

                    .fall {
                        font-size: 0.9rem;
                        margin-top: 1.5px;
                    }

                    p {
                        color: whitesmoke;
                        font-family: 'Poppins', sans-serif;
                        text-align: center;

                        &.time {
                            font-size: 0.8rem;
                            font-weight: 200;
                            margin-top: 7.5px;
                        }

                        &.currentDegree {
                            font-size: 1.2rem;
                            margin-top: 7.5px;
                        }
                    }

                    div {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 33.33%;

                        img {
                            height: 55%;
                        }
                        .fall {
                            font-size: 0.9rem;
                            margin-top: 1.5px;
                        }
                    }
                }
            }
        }
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 100px);
        height: 10%;
        padding: 0 50px;

        i {
            color: rgb(255, 255, 255);
            font-size: 1.15rem;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                color: #799ed0;
            }
        }
    }
}
</style>