<template>
    <div class="notice">
        <div class="notice__header">
            <div class="notice__header__total">
                <span class="count">142</span>
                <span class="label">Candidates</span>
            </div>
            <div class="notice__header__info">
                <div class="item">
                    <span class="item__top">All</span>
                    <span class="item__bottom">Best In</span>
                </div>
                <div class="item">
                    <span class="item__top">All</span>
                    <span class="item__bottom">Best In</span>
                </div>
                <div class="item">
                    <span class="item__top">Default</span>
                    <span class="item__bottom">Sort Results</span>
                </div>
            </div>
        </div>
        <div class="notice__body">
            <div class="notice__body__column">
                <span class="label">Name</span>
                <span class="label">Resume Score</span>
                <span class="label">Skill Match</span>
                <span class="label">Skill</span>
            </div>
            <div class="notice__body__list-box">
                <NOTICELIST v-for="item in tableData" :key="item.userName" :data="item" />
            </div>
        </div>
        <div class="notice__footer">
            <PAGINATION :totalPage="totalPage" @send-event="reset" />
        </div>
    </div>
</template>

<script setup lang="ts">
import NOTICELIST from '@components/mocules/List.vue'
import PAGINATION from '@components/mocules/common/Pagination.vue'
import { onMounted, ref, watch } from 'vue'

interface List {
    userName: string
    userRole: string
    userResumeScore: number
    userSkillMatch: number
    userSkill: string
}

// 페이지네이션 기능 구현에 필요한 데이터
const tableData = ref<List[]>([])
const selectedPage = ref<number>(1) // 0페이지라는 UI는 없으니까, 초기값을 1로 세팅
const totalPage = ref<number>(0) // tableData의 개수에 따라 페이지네이션 UI에 그려지는 숫자 리스트를 말합니다.
const totalCount = ref<number | undefined>()
const limit = ref<number>(10) // 테이블 UI에 보여지는 데이터 개수

const getData = () => {
    tableData.value = [
        {
            userName: 'Marco',
            userRole: 'FrontEnd Developer',
            userResumeScore: 89,
            userSkillMatch: 80,
            userSkill: 'Junior',
        },
        {
            userName: 'Jeff',
            userRole: 'BackEnd Developer',
            userResumeScore: 72,
            userSkillMatch: 65,
            userSkill: 'Senior',
        },
        {
            userName: 'Eric',
            userRole: 'User Experience',
            userResumeScore: 90,
            userSkillMatch: 91,
            userSkill: 'Senior',
        },
        {
            userName: 'Merry',
            userRole: 'User Interface',
            userResumeScore: 56,
            userSkillMatch: 43,
            userSkill: 'Junior',
        },
        {
            userName: 'Harry',
            userRole: 'Project Manager',
            userResumeScore: 61,
            userSkillMatch: 81,
            userSkill: 'Junior',
        },
        {
            userName: 'John',
            userRole: 'Project Orner',
            userResumeScore: 100,
            userSkillMatch: 100,
            userSkill: 'Senior',
        },
        {
            userName: 'Maxwell',
            userRole: 'FrontEnd Developer',
            userResumeScore: 50,
            userSkillMatch: 60,
            userSkill: 'Senior',
        },
        {
            userName: 'Pole',
            userRole: 'BackEnd Developer',
            userResumeScore: 80,
            userSkillMatch: 76,
            userSkill: 'Senior',
        },
        //
        {
            userName: 'Marco',
            userRole: 'FrontEnd Developer',
            userResumeScore: 89,
            userSkillMatch: 80,
            userSkill: 'Junior',
        },
        {
            userName: 'Jeff',
            userRole: 'BackEnd Developer',
            userResumeScore: 72,
            userSkillMatch: 65,
            userSkill: 'Senior',
        },
        {
            userName: 'Eric',
            userRole: 'User Experience',
            userResumeScore: 90,
            userSkillMatch: 91,
            userSkill: 'Senior',
        },
        {
            userName: 'Merry',
            userRole: 'User Interface',
            userResumeScore: 56,
            userSkillMatch: 43,
            userSkill: 'Junior',
        },
        {
            userName: 'Harry',
            userRole: 'Project Manager',
            userResumeScore: 61,
            userSkillMatch: 81,
            userSkill: 'Junior',
        },
        {
            userName: 'John',
            userRole: 'Project Orner',
            userResumeScore: 100,
            userSkillMatch: 100,
            userSkill: 'Senior',
        },
        {
            userName: 'Maxwell',
            userRole: 'FrontEnd Developer',
            userResumeScore: 50,
            userSkillMatch: 60,
            userSkill: 'Senior',
        },
        {
            userName: 'Pole',
            userRole: 'BackEnd Developer',
            userResumeScore: 80,
            userSkillMatch: 76,
            userSkill: 'Senior',
        },
    ]
    // totalCount: 총 데이터 리스트 개수
    // pageCount: 화면에 나타날 페이지 개수
    // limit: 한 페이지당 나타낼 데이터 개수
    totalCount.value = tableData.value !== undefined ? tableData.value.length : 0
    totalPage.value = Math.ceil(totalCount.value / limit.value) !== 0 ? Math.ceil(totalCount.value / limit.value) : 1
    // 0.9 => 1 / 0.4 =>  / 만약에 0이면 "조회 가능한 데이터가 없습니다." UI 발생 => 페이지네이션 숫자는 1로 보여야겠죠?
    tableData.value = disassemble(selectedPage.value - 1, tableData.value, limit.value)
}

const disassemble = (index: number, data: List[], size: number) => {
    const res = new Array()

    for (let i = 0; i < data.length; i += size) {
        res.push(data.slice(i, i + size)) // 11개의 데이터가 있을 때, limit 값이 현재 10이므로 10개 1개 이런 식으로 배열이 쪼개져야겠죠?
    }
    console.log(res)
    return res[index]
}

const reset = (pageIdx: number) => {
    if (pageIdx === 0) selectedPage.value = 1
    else selectedPage.value = pageIdx
}

watch(selectedPage, () => {
    getData()
})

onMounted(() => {
    getData()
})
</script>

<style lang="scss" scoped>
.notice {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: calc(100% - 36px);
    height: 100%;

    padding: 0 12px 0 24px;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        padding-bottom: 12px;

        border-bottom: 1px solid $color-white-200;

        &__total {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            .count {
                font-family: 'MBC1961GulimM';
                font-size: 18px;
            }
            .label {
                font-family: 'SUITE-Regular';
                color: $color-white-200;
            }
        }
        &__info {
            display: flex;
            align-items: center;

            gap: 40px;

            .item {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                &__top {
                    font-family: 'MBC1961GulimM';
                    color: $color-blue-000;
                }
                &__bottom {
                    font-family: 'SUITE-Regular';
                    color: $color-white-200;
                }
            }
        }
    }
    &__body {
        width: 100%;
        height: calc(100% - 92px);

        &__column {
            display: flex;
            align-items: center;

            width: 100%;
            height: 60px;

            .label {
                display: flex;
                align-items: center;
                justify-content: flex-start;

                width: 25%;
                height: 100%;

                margin-left: 16px;

                font-weight: 300;
                color: $color-white-200;
            }
        }

        &__list-box {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            width: 100%;
            height: calc(100% - 92px);

            gap: 12px;

            overflow-y: scroll;
        }
    }
}
</style>