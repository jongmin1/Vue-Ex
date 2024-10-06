<template>
    <div class="rightContainer">
        <div id="cityNameBox">
            <div class="cityName">
                <p>San Fransisco</p>
                <p>Oct 6, 2024</p>
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
                    <p>10&deg;</p>
                </div>
                <div class="weatherIcon">
                    <img src="../assets/images/01d.png" alt="MainLogo" />
                </div>
                <div class="weatherData">
                    <div>
                        <p></p>
                        <p></p>
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
                        <p class="time">2pm</p>
                        <p class="currentDegree">32&deg;</p>
                        <div>
                            <img src="../assets/images/drop.png" alt="" />
                            <p class="fall">15%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Map />
        <nav>
            <i class="fas fa-home"></i>
            <i class="fas fa-search-location"></i>
            <i class="fas fa-chart-line"></i>
            <i class="fas fa-cog"></i>
        </nav>
    </div>
</template>

<script setup lang="ts">
import Map from './Map.vue';
</script>

<style lang="scss" scoped>
.rightContainer {
    // width: 40%;
    // height: 100%;
    width: 324px;
    min-width: 324px;
    height: 700px;
    border-radius: 50px;
    background: linear-gradient(#cb0000, #0e1239);
    box-shadow: 5px 5px 10px gray;

    #cityNameBox {
        width: 100%;
        height: 10%;

        .cityName {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 100%;

            p {
                color: white;
                font-family: 'Poppins', sans-serif;
                line-height: 2.5;
                text-align: center;

                &:first-child {
                    width: 241px;
                    height: 33px;
                    font-size: 1.35rem;
                }
                &:last-child {
                    width: 160px;
                    height: 19px;
                    font-size: 0.9rem;
                    font-weight: 100;
                }
            }
        }
    }

    #contentsBox {
        width: 100%;
        height: calc(45% - 16px);
        margin-top: 16px;

        .buttonBox {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 20%;

            .buttonBackground {
                width: 224px;
                height: 35px;
                background-color: #370505;
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
                        background-color: transparent;
                        color: #a52727;
                    }
                    &.airquality {
                        background: #ff0000;
                        color: white;
                    }
                }
            }
        }
        .weatherBox {
            width: 100%;
            height: 80%;

            .airCondition {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 35%;

                p {
                    text-align: center;
                    font-size: 2.25rem;
                    font-weight: 500;
                    font-family: 'GmarketSansBold';
                    color: #fff;
                }
            }
            .detail {
                width: 100%;
                height: 65%;

                .title {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 25%;
                    color: white;

                    p {
                        font-family: 'LeferiPoint-WhiteObliqueA';
                    }
                }
                .data {
                    display: flex;
                    width: 100%;
                    height: 27.5%;
                    // background-color: rgb(187, 127, 255);

                    .dataName {
                        display: flex;
                        align-items: center;
                        width: 50%;
                        height: 100%;
                        font-family: 'LeferiPoint-WhiteObliqueA';

                        p {
                            &:first-child {
                                display: block;
                                width: 10px;
                                height: 10px;
                                border-radius: 50%;
                                background-color: #ffde23;
                                margin-left: 50px;
                            }
                            &:last-child {
                                margin-left: 10px;
                                color: white;
                                font-weight: 300;
                                font-size: 0.9rem;
                            }
                        }
                    }
                    .dataValue {
                        display: flex;
                        align-items: center;
                        justify-content: right;
                        width: 50%;
                        height: 100%;
                        font-family: 'LeferiPoint-WhiteObliqueA';

                        p {
                            color: white;
                            font-weight: 300;
                            margin-right: 50px;

                            span {
                                font-weight: 600;
                            }
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