<script setup>
import { onUnmounted, ref } from 'vue'
import Icon from './components/Icon.vue'
import { authors, affiliations, benchmarks, citation } from './data/paper'
import overview from './assets/paper/overview.webp'
import architecture from './assets/paper/architecture.webp'
import environment from './assets/paper/environment.webp'
import poster from './assets/paper/video-poster.webp'
import demoVideo from './assets/mp4/RoboMemory_compressed.mp4'

const paperUrl = `${import.meta.env.BASE_URL}paper/robomemory-corl2026.pdf`
// Match the four rows on the first page of the accepted manuscript.
const authorRows = Array.from({ length: 4 }, (_, index) => authors.slice(index * 5, index * 5 + 5))
const figureDialog = ref(null)
const expandedFigure = ref({ src: '', alt: '', caption: '' })
const citationElement = ref(null)
const copyState = ref('Copy BibTeX')
let copyTimer

function openFigure(src, alt, caption) {
  expandedFigure.value = { src, alt, caption }
  figureDialog.value.showModal()
  document.body.style.overflow = 'hidden'
}
function closeFigure() {
  figureDialog.value.close()
}
function onFigureClose() {
  document.body.style.overflow = ''
}
async function copyCitation() {
  clearTimeout(copyTimer)
  try {
    await navigator.clipboard.writeText(citation)
    copyState.value = 'Copied!'
  } catch {
    const range = document.createRange()
    range.selectNodeContents(citationElement.value)
    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
    copyState.value = 'Selected — press Ctrl/Cmd+C'
  }
  copyTimer = setTimeout(() => {
    copyState.value = 'Copy BibTeX'
  }, 4000)
}
onUnmounted(() => {
  clearTimeout(copyTimer)
  document.body.style.overflow = ''
})
</script>

<template>
  <a class="skip-link" href="#abstract">Skip to content</a>
  <main>
    <header class="publication-header container">
      <h1 class="publication-title">
        <span class="project-name">RoboMemory:</span>
        A Brain-inspired Multi-memory Agentic Framework for Interactive Environmental Learning in
        Physical Embodied Systems
      </h1>
      <p class="publication-venue">CoRL 2026</p>
      <p class="acceptance-note">Accepted at the Conference on Robot Learning</p>

      <div class="publication-authors" aria-label="Authors, in the order of the CoRL 2026 paper">
        <div v-for="(row, rowIndex) in authorRows" :key="rowIndex" class="author-row">
          <span v-for="([name, affiliation], index) in row" :key="name" class="author">
            <span class="author-name">{{ name }}</span
            ><sup>{{ affiliation }}</sup
            ><span v-if="index < row.length - 1" class="author-comma">,</span>
          </span>
        </div>
      </div>
      <p class="author-notes">
        <span><sup>*</sup> Equal contribution</span><span><sup>✉</sup> Corresponding authors</span>
      </p>
      <div class="publication-affiliations" aria-label="Author affiliations">
        <span v-for="(affiliation, index) in affiliations" :key="affiliation" class="affiliation"
          ><sup>{{ index + 1 }}</sup
          >{{ affiliation }}</span
        >
      </div>
      <p class="correspondence">
        <a href="mailto:lizhen@cuhk.edu.cn">lizhen@cuhk.edu.cn</a
        ><a href="mailto:hanyatong@cuhk.edu.cn">hanyatong@cuhk.edu.cn</a>
      </p>
      <div class="publication-links" aria-label="Project resources">
        <a class="resource-button" :href="paperUrl" target="_blank" rel="noopener"
          ><Icon name="paper" /> Paper</a
        >
        <a
          class="resource-button"
          href="https://arxiv.org/abs/2508.01415"
          target="_blank"
          rel="noopener"
          ><span class="arxiv-symbol" aria-hidden="true">a<span>χ</span></span> arXiv</a
        >
        <a
          class="resource-button"
          href="https://github.com/SP4595/RoboMemory-Code"
          target="_blank"
          rel="noopener"
          ><Icon name="code" /> Code</a
        >
        <a class="resource-button" href="#citation"><Icon name="copy" /> BibTeX</a>
      </div>
    </header>

    <section id="demo" class="teaser-section container" aria-label="RoboMemory demonstration">
      <video
        :src="demoVideo"
        :poster="poster"
        controls
        playsinline
        preload="none"
        aria-label="RoboMemory robot demonstration with on-screen task and action annotations"
      >
        <a :href="demoVideo">Download the RoboMemory demonstration video</a>
      </video>
      <p class="teaser-caption">
        <strong>RoboMemory</strong> remembers the world, learns from experience, and plans the next
        move.
      </p>
    </section>

    <section id="abstract" class="section section-light">
      <div class="text-container">
        <h2>Abstract</h2>
        <p class="abstract-text">
          Long-horizon embodied tasks require agents to learn, reason, and generalize robustly
          across complex real-world environments. However, existing approaches often struggle with
          partial observability, fragmented spatial reasoning, and inefficient integration of
          heterogeneous memories, limiting their capacity for long-horizon adaptation. To address
          this, we introduce <strong>RoboMemory</strong>, a brain-inspired framework that unifies
          Temporal, Spatial, Semantic, and Episodic memory for efficient long-horizon planning and
          interactive learning. Its core innovations are a comprehensive memory system designed for
          embodied tasks, and a dynamic spatial knowledge graph for scalable, consistent memory
          updates. Extensive experiments on EmbodiedBench show that RoboMemory improves the average
          success rate of Qwen2.5-VL-72B-Ins by <strong>26.5 percentage points</strong> and achieves
          performance comparable to strong closed-source VLM agents. Real-world trials further
          suggest RoboMemory’s potential for interactive environmental learning by reusing
          accumulated experience across repeated task attempts. These results demonstrate RoboMemory
          as a scalable memory-augmented framework for embodied agents, improving long-horizon
          planning and cumulative learning in complex interactive environments.
        </p>
      </div>
    </section>

    <section id="overview" class="section container">
      <h2>Brain-inspired Embodied Memory</h2>
      <figure class="publication-figure">
        <button
          class="figure-button"
          type="button"
          aria-label="Enlarge the RoboMemory overview"
          @click="
            openFigure(
              overview,
              'Brain-inspired organization of RoboMemory with memory, planning, and execution modules.',
              'Figure 1. Brain-inspired organization of RoboMemory.',
            )
          "
        >
          <img
            :src="overview"
            width="2400"
            height="1316"
            alt="Brain-inspired RoboMemory modules connected to real-world, Habitat, and ALFRED environments."
            loading="lazy"
          /><span class="expand-hint"><Icon name="expand" /></span>
        </button>
        <figcaption>
          <strong>Figure 1.</strong> RoboMemory adopts a brain-inspired organization of
          complementary memory and control modules, enabling long-term planning and experience reuse
          across diverse environments (real-world, Habitat, ALFRED) and robotic hardware.
        </figcaption>
      </figure>
    </section>

    <section id="method" class="section container">
      <h2>RoboMemory Framework</h2>
      <p class="section-intro text-container">
        RoboMemory follows a closed loop of
        <strong>perception, memory update, memory retrieval, planning, and execution</strong>. Four
        complementary memories provide the context needed for long-horizon interaction.
      </p>
      <figure class="publication-figure">
        <button
          class="figure-button"
          type="button"
          aria-label="Enlarge the RoboMemory architecture"
          @click="
            openFigure(
              architecture,
              'Full RoboMemory architecture with parallel memory operations, the Planner–Critic loop, and memory update mechanisms.',
              'Figure 2. The RoboMemory architecture and memory update mechanisms.',
            )
          "
        >
          <img
            :src="architecture"
            width="2400"
            height="1180"
            alt="RoboMemory pipeline and the incremental update mechanisms for its spatial knowledge graph and long-term vector databases."
            loading="lazy"
          /><span class="expand-hint"><Icon name="expand" /></span>
        </button>
        <figcaption>
          <strong>Figure 2.</strong> <strong>Left:</strong> the Planner, Critic, and Comprehensive
          Embodied Memory interact to adjust plans based on real-time visual inputs.
          <strong>Right:</strong> update mechanisms for Spatial, Semantic, and Episodic memory.
        </figcaption>
      </figure>
      <div class="method-description text-container">
        <p>
          <strong>Temporal memory</strong> maintains recent action history in a sequential buffer
          with recursive compression. <strong>Spatial memory</strong> tracks objects and
          relationships through a dynamically updated knowledge graph.
        </p>
        <p>
          <strong>Semantic memory</strong> retains reusable facts and execution constraints, while
          <strong>Episodic memory</strong> records past task attempts and outcomes. Memory updates
          and retrieval run in parallel across modules, supporting efficient closed-loop planning.
        </p>
      </div>
    </section>

    <section id="results" class="section section-light">
      <div class="container">
        <h2>Experimental Results</h2>
        <p class="section-intro text-container">
          On 200 tasks from the Base and Long subsets of EB-ALFRED and EB-Habitat, RoboMemory
          improves the average success rate of Qwen2.5-VL-72B-Ins from
          <strong>44.0% to 70.5%</strong>, a gain of <strong>26.5 percentage points</strong>.
        </p>
        <div
          class="table-scroll"
          tabindex="0"
          role="region"
          aria-label="Benchmark comparison table; scroll horizontally on small screens"
        >
          <table>
            <caption>
              Success rate (%) on EmbodiedBench. Higher is better.
            </caption>
            <thead>
              <tr>
                <th rowspan="2" scope="col">Method</th>
                <th rowspan="2" scope="col">Average</th>
                <th colspan="2" scope="colgroup">EB-ALFRED</th>
                <th colspan="2" scope="colgroup">EB-Habitat</th>
              </tr>
              <tr>
                <th scope="col">Base</th>
                <th scope="col">Long</th>
                <th scope="col">Base</th>
                <th scope="col">Long</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="model in benchmarks"
                :key="model.name"
                :class="{ 'our-method': model.ours }"
              >
                <th scope="row">
                  {{ model.name }}<small>{{ model.detail }}</small>
                </th>
                <td>{{ model.average.toFixed(1) }}</td>
                <td>{{ model.alfredBase.toFixed(1) }}</td>
                <td>{{ model.alfredLong.toFixed(1) }}</td>
                <td>{{ model.habitatBase.toFixed(1) }}</td>
                <td>{{ model.habitatLong.toFixed(1) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="table-note">
          Selected comparisons from Table 1.
          <a :href="`${paperUrl}#page=6`" target="_blank" rel="noopener"
            >See the paper for the full results.</a
          >
        </p>
      </div>
    </section>

    <section id="real-world" class="section container">
      <h2>Interactive Learning in the Real World</h2>
      <p class="section-intro text-container">
        Deployed on <strong>Mobile ALOHA</strong> in a kitchen environment, RoboMemory reuses
        accumulated experience across repeated task attempts. Across 15 tasks, success increases
        from <strong>26.67% on the first attempt to 46.67% on the second</strong>, with long-term
        memory retained between attempts.
      </p>
      <figure class="publication-figure environment-figure">
        <button
          class="figure-button"
          type="button"
          aria-label="Enlarge the real-world evaluation environment"
          @click="
            openFigure(
              environment,
              'The kitchen evaluation environment with a Mobile ALOHA robot, oven, sink, desk, and kitchen counter.',
              'Figure 4. Real-world evaluation environment.',
            )
          "
        >
          <img
            :src="environment"
            width="2150"
            height="1600"
            alt="Mobile ALOHA in the real-world kitchen testbed, with labeled objects and navigation targets."
            loading="lazy"
          /><span class="expand-hint"><Icon name="expand" /></span>
        </button>
        <figcaption>
          <strong>Figure 4.</strong> The real-world evaluation environment. The experiments cover
          three task categories with the same low-level executor, navigation controller, and action
          interface.
        </figcaption>
      </figure>
      <p class="text-container real-world-example">
        For example, after failing to find a banana by repeatedly searching the same locations,
        RoboMemory retains the unsuccessful experience. On the next attempt, it explores the kitchen
        counter, finds the banana, and completes the task of placing it in the oven. These results
        demonstrate experience reuse in the evaluated kitchen setting.
      </p>
    </section>

    <section id="citation" class="section section-light">
      <div class="text-container">
        <h2>BibTeX</h2>
        <p>If you find RoboMemory useful for your research, please consider citing our paper.</p>
        <div class="citation-toolbar">
          <button class="copy-button" type="button" @click="copyCitation">
            <Icon :name="copyState === 'Copied!' ? 'check' : 'copy'" /><span aria-live="polite">{{
              copyState
            }}</span>
          </button>
        </div>
        <pre
          tabindex="0"
          aria-label="BibTeX citation"
        ><code ref="citationElement">{{ citation }}</code></pre>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>RoboMemory · CoRL 2026</p>
    <a href="#">Back to top ↑</a>
  </footer>
  <dialog
    ref="figureDialog"
    class="figure-dialog"
    aria-label="Expanded research figure"
    @close="onFigureClose"
    @click="
      (event) => {
        if (event.target === figureDialog) closeFigure()
      }
    "
  >
    <div class="dialog-content">
      <button
        class="dialog-close"
        type="button"
        aria-label="Close expanded figure"
        autofocus
        @click="closeFigure"
      >
        <Icon name="close" /></button
      ><img :src="expandedFigure.src || undefined" :alt="expandedFigure.alt" />
      <p>{{ expandedFigure.caption }}</p>
    </div>
  </dialog>
</template>
