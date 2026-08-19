<script setup lang="ts">
import { resumeQuery } from '~/queries/resume'

const LABELS = {
  PERSONAL: {
    CURRENT_DATE: '現在年月日',
    NAME_FURIGANA: '名前フリガナ',
    NAME_ROMAJI: '名前ロマじ',
    BIRTHDAY: '誕生日',
    CURRENT_ADDRESS_FURIGANA: '現住所フリガナ',
    CURRENT_ADDRESS: '現住所',
    PHONE: '電話',
    EMAIL: 'メール',
    PHOTO: '写真',
  },
}

const { data: resume } = await useSanityQuery<ResumeQueryResult>(
  resumeQuery,
  {
    language: 'ja',
  },
)

const sections = computed(() => resume.value?.sections)

// Personal Info section
const personalInfo = computed(() => sections.value?.find(section => section.type === 'personal')?.content as KeyValueBlockQueryResult[])

function getDateParts(date: string) { // YYYY-MM-DD
  const [year, month, day] = date.split('-').map(Number)
  return { year, month, day }
}

function getAge(birthDate: string) { // YYYY-MM-DD
  const [year, month, day] = birthDate.split('-').map(Number)

  const today = new Date()

  let age = today.getFullYear() - year!

  const birthdayPassed
    = today.getMonth() + 1 > month!
      || (today.getMonth() + 1 === month && today.getDate() >= day!)

  if (!birthdayPassed) {
    age--
  }

  return age
}

const currentDate = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.CURRENT_DATE)?.value ?? '',
)

const nameFurigana = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.NAME_FURIGANA)?.value ?? '',
)

const nameRomaji = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.NAME_ROMAJI)?.value ?? '',
)

const birthday = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.BIRTHDAY)?.value ?? '',
)

const currentAddressFurigana = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.CURRENT_ADDRESS_FURIGANA)?.value ?? '',
)

const currentAddress = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.CURRENT_ADDRESS)?.value ?? '',
)

const phone = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.PHONE)?.value ?? '',
)

const email = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.EMAIL)?.value ?? '',
)

const photo = computed(() =>
  personalInfo.value.find(item => item.label === LABELS.PERSONAL.PHOTO)?.value ?? '',
)

const currentDateParts = computed(() => {
  return getDateParts(currentDate.value)
})

const birthdayParts = computed(() => {
  return getDateParts(birthday.value)
})

const age = computed(() => {
  if (!birthday.value)
    return ''

  return String(getAge(birthday.value))
})

// Experience & Education section
const experience = computed(() => ((sections.value?.find(section => section.type === 'experience')?.content as Experience[]).map((item) => {
  const { year, month, day } = getDateParts(item.startDate!)
  return { ...item, year, month, day }
})))
const education = computed(() => ((sections.value?.find(section => section.type === 'education')?.content as Education[]).map((item) => {
  const { year, month, day } = getDateParts(item.startDate!)
  return { ...item, year, month, day }
})))

// const motive = computed(() => sections.value?.at(3))
// const request = computed(() => sections.value?.at(4))
</script>

<template>
  <div
    class="text-3xs md:text-xs font-ja-serif max-w-2xl flex flex-col gap-6 py-20 px-5 sm:px-0 flex-1
    mx-auto **:place-self-auto *:not-first:border-2"
  >
    <section>
      <!-- 1st -->
      <div
        class="
        grid
        grid-cols-12
        sm:grid-cols-10
        grid-rows-[auto_2rem_4rem_2rem]
      "
      >
        <!-- Left side -->
        <div class="col-span-9 sm:col-span-8 contents">
          <!-- Row 1 -->
          <div class="col-span-9 sm:col-span-8 grid grid-cols-8 items-end pb-2">
            <h4 class="col-span-3 sm:col-span-4 text-3xl pb-1.5">
              履歴書
            </h4>

            <div
              class="col-span-5 sm:col-span-4 col-start-4 sm:col-start-5 flex justify-end
            "
            >
              <p class="resume-padding">
                {{ currentDateParts.year }}
              </p>
              <p class="resume-padding">
                年
              </p>
              <p class="resume-padding">
                {{ currentDateParts.month }}
              </p>
              <p class="resume-padding">
                月
              </p>
              <p class="resume-padding">
                {{ currentDateParts.day }}
              </p>
              <p class="resume-padding">
                日現在
              </p>
            </div>
          </div>

          <!-- Row 2 -->
          <article
            :style="{
              borderBottomStyle: 'dotted',
            }"
            class="border-t-2 border-l-2 border-r-2 border-b col-span-9
          sm:col-span-8 grid grid-cols-9 sm:grid-cols-8"
          >
            <h4 class="resume-padding col-span-2 sm:col-span-1">
              フリガナ
            </h4>

            <div class="resume-padding col-span-7">
              <!-- answer -->
              {{ nameFurigana }}
            </div>
          </article>

          <!-- Row 3 -->
          <article
            class="border-x-2 border-b-2 col-span-9 sm:col-span-8 grid
          grid-cols-9 sm:grid-cols-8"
          >
            <h4 class="col-span-2 sm:col-span-1 resume-padding !items-start !justify-between">
              <span>氏</span>
              <span>名</span>
            </h4>

            <div class="resume-padding !items-start col-span-7 text-md">
              <!-- answer -->
              {{ nameRomaji }}
            </div>
          </article>

          <!-- Row 4 -->
          <article class="border-l-2 col-span-9 sm:col-span-8 grid grid-cols-9 sm:grid-cols-8">
            <div class="grid grid-cols-9 sm:grid-cols-12 col-span-7 border-r-2 *:flex *:not-last:justify-around">
              <div class="resume-padding sm:col-start-4 col-span-2">
                <p>
                  <!-- answer -->
                  {{ birthdayParts.year }}
                </p>
                <p>年</p>
              </div>
              <div class="resume-padding col-span-2">
                <p>
                  <!-- answer -->
                  {{ birthdayParts.month }}
                </p>
                <p>月</p>
              </div>
              <div class="resume-padding col-span-2">
                <p>
                  <!-- answer -->
                  {{ birthdayParts.day }}
                </p>
                <p>日生</p>
              </div>
              <div class="resume-padding col-span-3 !justify-around">
                （満 <p>
                  <!-- answer -->
                  {{ age }}
                </p> 歳）
              </div>
            </div>
            <div
              class="border-r-2 col-span-2 sm:col-span-1
          resume-padding !justify-around"
            >
              <p>男</p>
              <p>・</p>
              <p>女</p>
            </div>
          </article>
        </div>

        <!-- Picture -->
        <aside
          class="
        col-start-10
        col-span-3
        sm:col-start-9
        sm:col-span-2
        row-start-1
        row-end-6
        flex
        items-center
        justify-center
      "
        >
          <div
            class="aspect-[3/4] w-20 sm:w-28 relative border text-center text-[10px] p-2 flex
          flex-col gap-3 items-center justify-center"
          >
            <NuxtImg
              class="absolute inset-0 w-full h-full object-cover"
              :src="photo"
              width="800"
              height="600"
              format="webp"
            />
            <div>
              写真を貼る位置
            </div>
            <div
              class="grid grid-cols-[0.5rem_auto] grid-flow-row
            *:items-center *:justify-center *:text-left"
            >
              <p>1. </p>
              <p>縦 36～40 mm<br>横 24～30 mm</p>
              <p>2. </p>
              <p>本人単身胸から上</p>
              <p>3. </p>
              <p>裏面にのりづけ</p>
            </div>
          </div>
        </aside>
      </div>
      <!-- 2nd -->
      <div
        class="
        border-x-2 border-b-2
        grid
        grid-cols-12
        sm:grid-cols-10 grid-rows-[2rem_2rem_2rem_2rem_4rem]"
      >
        <!-- Row 1 -->
        <div
          :style="{
            borderBottomStyle: 'dotted',
          }"
          class="border-t-2 border-b row-span-1 col-span-12 sm:col-span-10 grid grid-cols-12 sm:grid-cols-10"
        >
          <h4
            class="resume-padding col-span-2 sm:col-span-1"
          >
            フリガナ
          </h4>
          <div
            class="border-r resume-padding col-span-7"
          >
            <!-- answer -->
            {{ currentAddressFurigana }}
          </div>
          <div

            class="resume-padding col-span-3 sm:col-span-2 flex gap-1"
          >
            <h4>電話</h4>
            <p>
              <!-- answer -->
              {{ phone }}
            </p>
          </div>
        </div>
        <!-- Row 2 + 3 -->
        <div
          class="border-b-2 row-span-2 col-span-12 sm:col-span-10 grid
        grid-cols-12 sm:grid-cols-10"
        >
          <h4 class="col-span-2 sm:col-span-1 resume-padding !items-start !justify-around">
            <p>現</p>
            <p>住</p>
            <p>所</p>
          </h4>
          <div class="border-r col-span-7 flex *:h-full">
            <div class="resume-padding !items-start">
              〒
            </div>
            <div class="resume-padding grow !items-start">
              <!-- answer -->
              {{ currentAddress }}
            </div>
          </div>
          <div class="col-span-3 sm:col-span-2">
            <div
              class="resume-padding"
            >
              メール
            </div>
            <p class="resume-padding !items-start">
              <!-- answer -->
              {{ email }}
            </p>
          </div>
        </div>

        <!-- Row 5 -->
        <div
          :style="{
            borderBottomStyle: 'dotted',
          }"
          class="border-b col-span-12 sm:col-span-10 grid grid-cols-12 sm:grid-cols-10"
        >
          <h4 class="resume-padding col-span-2 sm:col-span-1">
            フリガナ
          </h4>
          <div class="border-r resume-padding col-span-7">
            <!-- answer -->
          </div>
          <div class="resume-padding col-span-3 sm:col-span-2 flex gap-1">
            <h4>電話</h4>
            <p>
              <!-- answer -->
            </p>
          </div>
        </div>
        <!-- Row 6 (4rem) -->
        <div class="col-span-12 sm:col-span-10 grid grid-cols-12 sm:grid-cols-10">
          <h4 class="resume-padding col-span-2 sm:col-span-1 !items-start !justify-around">
            連 絡 先
          </h4>
          <div class="col-span-7 grid grid-cols-5 sm:grid-cols-2">
            <div class="col-span-2 sm:col-span-1 flex *:h-full">
              <p class="resume-padding !items-start">
                〒
              </p>
              <p class="resume-padding !items-start px-2 grow">
                <!-- answer -->
              </p>
            </div>
            <div class="col-span-3 sm:col-span-1 border-r flex flex-col">
              <div class="md:text-3xs resume-padding !justify-end">
                （現住所以外に連絡を希望する場合のみ記入）
              </div>
              <div class="flex flex-row justify-end grow">
                <p class="resume-padding">
                  <!-- answer -->
                </p>
                <p class="resume-padding">
                  方
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-3 sm:col-span-2">
            <div
              class="resume-padding"
            >
              メール
            </div>
            <p class="resume-padding !items-start">
              <!-- answer -->
            </p>
          </div>
        </div>
      </div>
      <!-- 3rd -->
      <div />
    </section>
    <section
      class="grid grid-flow-row *:grid *:grid-cols-[4rem_2.5rem_auto]
    *:not-last:border-b *:*:not-last:border-r *:*:first:border-dotted
    *:*:not-first:border-solid *:*:not-last:justify-center *:not-first:not-last:border-dotted"
    >
      <article
        class="resume-parent-padding *:justify-center"
      >
        <h4>
          年
        </h4>
        <h4>
          月
        </h4>
        <h4>
          学歴・職歴（各別にまとめて書く）
        </h4>
      </article>
      <article
        v-for="item in experience"
        :key="item._id"
        class="resume-parent-padding"
      >
        <p>{{ item.year }}</p>
        <p>{{ item.month }}</p>
        <p>{{ item.company }}・{{ item.position }}</p>
      </article>
      <article
        v-for="item in education"
        :key="item._id"
        class="resume-parent-padding"
      >
        <p>{{ item.year }}</p>
        <p>{{ item.month }}</p>
        <p>{{ item.institution }}・{{ item.degree }}・{{ item.major }}</p>
      </article>
    </section>
    <section
      class="grid grid-flow-row *:grid *:grid-cols-[4rem_2.5rem_auto]
    *:not-last:border-b *:*:not-last:border-r *:*:first:border-dotted
    *:*:not-first:border-solid *:*:not-last:justify-center *:not-first:not-last:border-dotted"
    >
      <article
        class="resume-parent-padding *:justify-center"
      >
        <h4>
          年
        </h4>
        <h4>
          月
        </h4>
        <h4>
          免許 ・ 資格
        </h4>
      </article>
      <article class="resume-parent-padding">
        <p>ー</p>
        <p>ー</p>
        <p>ー</p>
      </article>
      <article class="resume-parent-padding">
        <p>ー</p>
        <p>ー</p>
        <p>ー</p>
      </article>
    </section>
    <section class="flex flex-col">
      <h4 class="resume-padding">
        志望の動機、自己PRなど
      </h4>
      <div class="resume-padding min-h-38">
        <!-- answer -->
      </div>
    </section>
    <section class="grid grid-rows-6 *:first:border-b-2 *:not-first:not-last:border-b *:not-first:not-last:border-dashed">
      <h4 class="resume-padding">
        本人希望記入欄 　（特に給料、職種、勤務時間、勤務地、その他についての希望などがあれば記入）
      </h4>
      <article class="resume-padding">
        <!-- line -->
      </article>
      <article class="resume-padding">
        <!-- line -->
      </article>
      <article class="resume-padding">
        <!-- line -->
      </article>
      <article class="resume-padding">
        <!-- line -->
      </article>
      <article class="resume-padding">
        <!-- line -->
      </article>
    </section>
  </div>
</template>
