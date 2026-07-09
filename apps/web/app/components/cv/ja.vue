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
        grid-cols-10
        grid-rows-[auto_2rem_2rem_4rem_2rem]

      "
      >
        <!-- Left side -->
        <div class=" col-span-8 contents">
          <!-- Row 1 -->
          <h1 class="col-span-8 row-start-1 text-3xl">
            履歴書
          </h1>

          <!-- Row 2 -->
          <div
            class="col-start-5 col-span-4 row-start-2 grid grid-cols-4 justify-self-end"
          >
            <p class="cv-padding">
              平成
            </p>
            <p class="cv-padding">
              年
            </p>
            <p class="cv-padding">
              月
            </p>
            <p class="cv-padding">
              日現在
            </p>
          </div>

          <!-- Row 3 -->
          <article
            :style="{
              borderBottomStyle: 'dotted',
            }"
            class="border-l-2 border-t-2 border-r border-b col-span-7 row-start-3 grid grid-cols-7"
          >
            <h4 class="cv-padding">
              ふりがな
            </h4>

            <div class="cv-padding !items-start col-span-6">
              <!-- answer -->
              ー
            </div>
          </article>

          <article
            class="border-r-2 border-t-2 border-b col-start-8 row-start-3
          cv-padding !justify-around"
          >
            <p>男</p>
            <p>・</p>
            <p>女</p>
          </article>

          <!-- Row 4 -->
          <article class="border-l-2 border-r border-b col-span-7 row-start-4 grid grid-cols-7">
            <h4 class="cv-padding !items-start !justify-between">
              <span>氏</span>
              <span>名</span>
            </h4>

            <div class="cv-padding !items-start col-span-6">
              <!-- answer -->
              ー
            </div>
          </article>

          <article class="border-b border-r-2 col-start-8 row-start-4 flex flex-col">
            <h4 class="cv-padding">
              印
            </h4>
          </article>

          <!-- Row 5 -->
          <article class="border-l-2 col-span-8 row-start-5 grid grid-cols-8">
            <h4 class="cv-padding border-r">
              生年月日
            </h4>
            <div class="grid grid-cols-12 col-span-7 border-r-2">
              <div class="cv-padding col-span-3 !justify-around">
                昭和・平成
              </div>
              <div class="cv-padding col-span-2 !justify-end">
                年
              </div>
              <div class="cv-padding col-span-2 !justify-end">
                月
              </div>
              <div class="cv-padding col-span-2 !justify-end">
                日生
              </div>
              <div class="cv-padding col-span-3 !justify-around">
                満（　　）歳
              </div>
            </div>
          </article>
        </div>

        <!-- Picture -->
        <aside
          class="
        col-start-9
        col-span-2
        row-start-1
        row-end-6
        flex
        items-center
        justify-center
      "
        >
          <div class="aspect-[3/4] w-28 border text-center text-[10px] p-2">
            写真を貼る位置
          </div>
        </aside>
      </div>
      <!-- 2nd -->
      <div
        class="
        border-x-2 border-b-2
        grid
        grid-cols-10 grid-rows-[2rem_2rem_2rem_2rem_2rem_4rem]"
      >
        <!-- Row 1 -->
        <div
          :style="{
            borderBottomStyle: 'dotted',
          }"
          class="border-b row-span-1 col-span-10 grid grid-cols-10"
        >
          <h4
            class="border-t cv-padding"
          >
            ふりがな
          </h4>
          <div
            class="border-t border-r cv-padding col-span-7"
          >
            <!-- answer -->
            ー
          </div>
          <div
            class="border-t-2 cv-padding col-span-2"
          >
            （自宅電話）
          </div>
        </div>
        <!-- Row 2 + 3 -->
        <div class="row-span-2 col-span-10 grid grid-cols-10">
          <h4 class="border-b col-span-1 cv-padding !items-start">
            <p>現</p>
            <p>住</p>
            <p>所</p>
          </h4>
          <div class="border-b border-r col-span-7 flex *:h-full">
            <div class="cv-padding !items-start">
              〒
            </div>
            <div class="cv-padding grow !items-start">
              <!-- answer -->
              ー
            </div>
          </div>
          <div class="col-span-2 grid grid-rows-2">
            <div
              :style="{
                borderBottomStyle: 'dotted',
              }"
              class="border-y cv-padding row-span-1 row-start-2"
            >
              （携帯電話）
            </div>
          </div>
        </div>
        <!-- Row 4 -->
        <div class="border-b *:border-r col-span-10 grid grid-cols-10">
          <h4 class="cv-padding col-span-1">
            E－mail
          </h4>
          <div class="cv-padding col-span-7">
            <!-- answer -->
            ー
          </div>
        </div>
        <!-- Row 5 -->
        <div
          :style="{
            borderBottomStyle: 'dotted',
          }"
          class="border-b col-span-10 grid grid-cols-10"
        >
          <h4 class="cv-padding col-span-1">
            ふりがな
          </h4>
          <div class="border-r cv-padding col-span-7">
            <!-- answer -->
            ー
          </div>
          <div class="cv-padding col-span-2">
            （連絡先電話）
          </div>
        </div>
        <!-- Row 6 (4rem) -->
        <div class="col-span-10 grid grid-cols-10">
          <h4 class="cv-padding col-span-1 !items-start">
            連 絡 先
          </h4>
          <div class="col-span-7 flex *:h-full">
            <div class="cv-padding !items-start">
              〒
            </div>
            <div class="border-r grow grid grid-rows-2">
              <div class="cv-padding !justify-center">
                （現住所以外に連絡を希望する場合のみ記入）
              </div>
              <div class="cv-padding row-start-2">
                <!-- answer -->
                ー
              </div>
            </div>
          </div>
          <div class="col-span-2" />
        </div>
      </div>
      <!-- 3rd -->
      <div />
    </section>
    <section
      class="grid grid-flow-row *:grid *:grid-cols-[4rem_2.5rem_auto]
    *:not-last:border-b *:*:border-r *:*:first:border-dotted
    *:*:not-first:border-solid *:*:not-last:justify-center"
    >
      <article
        class="cv-parent-padding *:items-center *:justify-center"
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
      <article class="cv-parent-padding">
        <p>2021</p>
        <p>11</p>
        <p>ー</p>
      </article>
    </section>
    <section class="grid grid-cols-[auto_auto_7rem_7.25rem] *:border-r">
      <div
        :style="{
          borderBottomStyle: 'dotted',
        }"
        class="border-b grid grid-cols-12 *:col-span-3
      *:not-first:grid *:not-first:grid-cols-3
      *:py-1.5"
      >
        <div class="pl-2 pr-0">
          通勤時間
        </div>
        <div>
          <p>
            <!-- answer -->
          </p>
          <p class="col-span-2">
            約
          </p>
        </div>
        <div>
          <p>
            <!-- answer -->
          </p>
          <p class="col-span-2">
            時間
          </p>
        </div>
        <div>
          <p>
            <!-- answer -->
          </p>
          <p class="col-span-2">
            分
          </p>
        </div>
      </div>
      <div class="border-b cv-padding">
        扶養家族数
      </div>
      <div class="border-b cv-padding">
        配偶者
      </div>
      <div class="border-b cv-padding border-r-0">
        配偶者の扶養義務
      </div>
      <div
        class="grid grid-cols-12 *:col-span-4
      *:not-first:grid *:not-first:grid-cols-4 *:first:px-2
      *:py-1.5"
      >
        <div>最寄り駅</div>
        <div>
          <p
            class="col-span-2"
          >
          <!-- answer -->
          </p>
          <p
            class="col-span-2"
          >
            線
          </p>
        </div>
        <div>
          <p
            class="col-span-2"
          >
          <!-- answer -->
          </p>
          <p
            class="col-span-2"
          >
            駅
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-12
      *:first:px-2
      *:py-1.5"
      >
        <div class="col-span-7">
          （配偶者を除く）
        </div>
        <div class="grid grid-cols-5 col-span-5 pr-2">
          <p class="col-span-4">
            <!-- answer -->
          </p>
          <p class="col-span-1">
            人
          </p>
        </div>
      </div>
      <div class="cv-padding !justify-center">
        有・無
      </div>
      <div class="cv-padding !justify-center border-r-0">
        有・無
      </div>
    </section>
    <section>
      <h4 class="cv-padding">
        特技・趣味・得意科目など
      </h4>
      <p class="cv-padding min-h-24 !items-start">
        <!-- answer -->
      </p>
    </section>
    <section>
      <h4 class="cv-padding">
        志望の動機
      </h4>
      <p class="cv-padding min-h-48 !items-start">
        <!-- answer -->
      </p>
    </section>
    <section>
      <h4 class="cv-padding">
        本人希望記入欄（特に給料・職種・勤務時間・勤務地・その他についての希望などがあれば記入）
      </h4>
      <p
        class="cv-padding min-h-24 !items-start"
      >
        <!-- answer -->
      </p>
    </section>
    <section class="grid grid-cols-12 ">
      <!-- left side -->
      <div class="col-span-9 grid grid-cols-3 grid-rows-5">
        <div
          class="col-span-3 row-span-2 border-b flex flex-col *:grid
        *:grid-flow-col *:pt-1.5 *:last:pb-1.5"
        >
          <div class="*:pr-2 *:first:pl-2">
            <h4>保護者（本人が未成年の場合のみ記入）</h4>
            <p>
              <!-- answer -->
            </p>
          </div>
          <div class="*:pr-2 *:first:pl-2 ">
            <h4>ふりがな</h4>
            <p>
              <!-- answer -->
            </p>
          </div>
        </div>
        <div class="border-r row-span-3 col-span-1 flex gap-1 *:py-1.5 *:pr-2 *:first:pl-1.5">
          <h4>
            氏名
          </h4>
          <p class="flex !justify-start !items-start">
            <!-- answer -->
          </p>
        </div>
        <div class="row-span-3 col-span-2 flex gap-1 *:py-1.5 *:pr-2 *:first:pl-1.5">
          <h4>
            住所
          </h4>
          <p class="flex !justify-start !items-start">
            〒
          </p>
          <p class="flex !justify-start !items-start">
            <!-- answer -->
          </p>
        </div>
      </div>
      <!-- right side -->
      <div class="col-span-3 border-l flex flex-col">
        <h4 class="cv-padding !justify-center">
          （連絡先電話番号）
        </h4>
        <p class="cv-padding !items-start">
          <!-- answer -->
        </p>
      </div>
    </section>
  </div>
</template>
