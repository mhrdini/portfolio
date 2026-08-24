<script setup lang="ts">
import type { MotionProps } from 'motion-v'
import { differenceInMonths, format } from 'date-fns'
import { motion } from 'motion-v'
import { resumeQuery } from '~/queries/resume'

const LABELS = {
  PERSONAL: {
    NAME: 'Name',
    WEBSITE: 'Website',
    EMAIL: 'Work Email',
    GITHUB: 'GitHub',
    LINKEDIN: 'LinkedIn',
  },
  SKILLS: {
    FOCUS_AREAS: 'Focus areas',
    SPOKEN_LANGUAGES: 'Spoken languages',
    TOOLS_TECHNOLOGIES: 'Tools + technologies',
    LIBRARIES_FRAMEWORKS: 'Libraries + frameworks',
    LANGUAGES: 'Languages',
  },
}

const { data: resume } = await useSanityQuery<ResumeQueryResult>(resumeQuery, {
  language: 'en',
})

const sections = computed(() => resume.value?.sections)

// type SectionType = NonNullable<NonNullable<ResumeQueryResult>['sections']>[number]['type']
// function sectionByType(
//   type: SectionType,
// ) {
//   return computed(() => sections.value?.find(section => section.type === type))
// }

// Contact Info section
const contactInfo = computed(() => sections.value?.find(section => section.type === 'personal')?.content as (KeyValueBlockQueryResult | Social)[])

const PROTOCOL_REGEX = /^https?:\/\//
function removeProtocol(url: string = '') {
  return url.replace(PROTOCOL_REGEX, '')
}

const contact = computed(() => {
  const content = contactInfo.value ?? []

  return {
    name: (content.find(item => (item as KeyValueBlockQueryResult).label === LABELS.PERSONAL.NAME) as KeyValueBlockQueryResult).value,
    website: removeProtocol((content.find(item => (item as Social).title === LABELS.PERSONAL.WEBSITE) as Social)?.linkEmail?.value),
    email: (content.find(item => (item as Social).title === LABELS.PERSONAL.EMAIL) as Social)?.linkEmail?.value,
    github: removeProtocol((content.find(item => (item as Social).title === LABELS.PERSONAL.GITHUB) as Social)?.linkEmail?.value),
    linkedIn: removeProtocol((content.find(item => (item as Social).title === LABELS.PERSONAL.LINKEDIN) as Social)?.linkEmail?.value),
  }
})
// Experience section
const experience = computed(() => sections.value?.find(section => section.type === 'experience')?.content as Experience[] | undefined)
function formatDate(date: string) {
  return format(new Date(date), 'MMM yyyy')
}

function formatDuration(start: Date, end?: Date) {
  let endDate = end

  if (!endDate) {
    endDate = new Date()
  }

  const totalMonths = differenceInMonths(endDate, start)

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts = []

  if (years) {
    parts.push(`${years} year${years === 1 ? '' : 's'}`)
  }

  if (months) {
    parts.push(`${months} month${months === 1 ? '' : 's'}`)
  }

  if (!parts.length) {
    return 'less than 1 month'
  }

  return parts.join(', ')
}

function formatExperienceDuration(item: Experience | Education, withYearsMonths: boolean = true) {
  if (!item.startDate)
    return ''

  const startDate = new Date(item.startDate)
  const endDate = item.endDate ? new Date(item.endDate) : new Date()

  const start = formatDate(item.startDate)
  const end = item.endDate
    ? formatDate(item.endDate)
    : 'Present'

  const parts = [`${start} - ${end}`]

  if (withYearsMonths)
    parts.push(`(${item.endDate ? formatDuration(startDate, endDate) : formatDuration(startDate)})`)

  return parts.join(' ')
}

// Education section
const education = computed(() => sections.value?.find(section => section.type === 'education')?.content as Education[] | undefined)

// Skills section
const skills = computed(() => sections.value?.find(section => section.type === 'skills')?.subsections)

const focusAreas = computed(() => skills.value?.find(section => section.title === LABELS.SKILLS.FOCUS_AREAS)?.content as KeyValueBlockQueryResult[])
const spokenLanguages = computed(() => skills.value?.find(section => section.title === LABELS.SKILLS.SPOKEN_LANGUAGES)?.content as Language[])
const toolsTechnologies = computed(() => skills.value?.find(section => section.title === LABELS.SKILLS.TOOLS_TECHNOLOGIES)?.subsections as ResumeSection[])
const librariesFrameworks = computed(() => toolsTechnologies.value.find(section => section.title === LABELS.SKILLS.LIBRARIES_FRAMEWORKS)?.content as KeyValueBlockQueryResult[])
const languages = computed(() => toolsTechnologies.value.find(section => section.title === LABELS.SKILLS.LANGUAGES)?.content as KeyValueBlockQueryResult[])

// Motion
const effect: MotionProps['variants'] = wipe
</script>

<template>
  <AnimatePresence>
    <motion.div
      class="max-w-xl px-8 pt-20 pb-28 sm:px-0 flex-1 mx-auto items-start leading-snug **:whitespace-pre-line grid
    grid-cols-[max-content_1fr] gap-x-4
    gap-y-8
    *:odd:font-medium
    *:odd:text-lg *:odd:text-right *:even:text-xs"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.h1
        :variants="effect"
        :custom="0"
      >
        {{ contact.name }}
      </motion.h1>
      <section
        class="pt-1.5"
      >
        <motion.p
          :variants="effect"
          :custom="0"
        >
          {{ contact.website }}
        </motion.p>
        <motion.p
          :variants="effect"
          :custom="0"
        >
          {{ contact.email }}
        </motion.p>
        <motion.p
          :variants="effect"
          :custom="0"
        >
          {{ contact.github }}
        </motion.p>
        <motion.p
          :variants="effect"
          :custom="0"
        >
          {{ contact.linkedIn }}
        </motion.p>
      </section>
      <motion.h2
        :variants="effect"
        :custom="1"
      >
        Experience
      </motion.h2>
      <section
        class="resume-section"
      >
        <article
          v-for="(item) in experience"
          :key="item._id"
        >
          <motion.h3
            :variants="effect"
            :custom="1"
          >
            <div>
              {{ item.company }}
            </div>
            <div>
              {{ item.position }}
            </div>
          </motion.h3>
          <div>
            <motion.p
              v-for="text in item.description"
              :key="text._key"
              :variants="effect"
              :custom="1"
            >
              {{ text }}
            </motion.p>
            <motion.p
              :variants="effect"
              :custom="1"
            >
              {{ formatExperienceDuration(item) }}
            </motion.p>
          </div>
        </article>
      </section>
      <motion.h3
        :variants="effect"
        :custom="2"
      >
        Education
      </motion.h3>
      <section class="resume-section *:*:last:*:first:font-medium">
        <article v-for="item in education" :key="item._id">
          <motion.h4
            :variants="effect"
            :custom="2"
          >
            <div>
              {{ item.degree }}
            </div>
            <div>
              {{ item.major }}
            </div>
          </motion.h4>
          <div>
            <motion.h5
              :variants="effect"
              :custom="2"
            >
              {{ item.institution }}
            </motion.h5>
            <motion.p
              v-for="text in item.description"
              :key="text._key"
              :variants="effect"
              :custom="2"
            >
              {{ text }}
            </motion.p>
            <motion.p
              :variants="effect"
              :custom="2"
            >
              {{ formatExperienceDuration(item, false) }}
            </motion.p>
          </div>
        </article>
      </section>
      <motion.h3
        :variants="effect"
        :custom="3"
      >
        Skills
      </motion.h3>
      <section class="flex flex-1 gap-4">
        <article
          class="flex flex-col gap-1 *:odd:font-medium *:odd:text-lg
        *:odd:text-neutral-400 *:even:flex *:even:flex-col *:odd:not-first-of-type:pt-4"
        >
          <motion.h4
            :variants="effect"
            :custom="3"
          >
            Focus areas
          </motion.h4>
          <div>
            <motion.p
              v-for="item in focusAreas"
              :key="item._key"
              :variants="effect"
              :custom="3"
            >
              {{ item.label }}
            </motion.p>
          </div>
          <motion.h4
            :variants="effect"
            :custom="3"
          >
            Spoken languages
          </motion.h4>
          <div>
            <motion.span
              v-for="item in spokenLanguages"
              :key="item._id"
              :variants="effect"
              :custom="3"
            >
              {{ item.englishName }} <span class="text-neutral-400 capitalize">({{ item.proficiency }})</span>
            </motion.span>
          </div>
        </article>
        <article class="flex flex-col gap-1">
          <motion.h4
            :variants="effect"
            :custom="3"
            class="resume-section-title text-neutral-400"
          >
            Tools + technologies
          </motion.h4>
          <div class="flex flex-col *:odd:text-neutral-400 *:odd:not-first-of-type:pt-2">
            <motion.h5
              :variants="effect"
              :custom="3"
            >
              Libraries + frameworks
            </motion.h5>
            <div>
              <motion.p
                v-for="item in librariesFrameworks"
                :key="item._key"
                :variants="effect"
                :custom="3"
              >
                {{ item.label }}
              </motion.p>
            </div>
            <motion.h5
              :variants="effect"
              :custom="3"
            >
              Languages
            </motion.h5>
            <div>
              <motion.p
                v-for="item in languages"
                :key="item._key"
                :variants="effect"
                :custom="3"
              >
                {{ item.label }}
              </motion.p>
            </div>
          </div>
        </article>
      </section>
    </motion.div>
  </AnimatePresence>
</template>
