<template>
  <!-- <div class="sign contentContainer">
    <div class="">This page is working in progress.</div>
    <div class="">Please wait for a while.</div>
    <div class="inProgress"></div>
  </div> -->
  <div class="articleTitleContainer contentContainer">
    <div class="articleTitle">
      <span class="colorStress">RoboMemory:</span>
    </div>
    <div class="articleTitle subTitle">
      A Brain-inspired Multi-memory Agentic Framework for Lifelong Learning in
      Physical Embodied Systems
    </div>

    <div class="arthorNameLine">
      <div class="arthorNameContainer">
        <span class="arthorName">Mingcong Lei</span
        ><span class="sup">1, 3, *</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Honghao Cai</span>
        <span class="sup">1, *</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Zezhou Cui</span>
        <span class="sup">1, 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Liangchen Tan</span>
        <span class="sup">4</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Junkun Hong</span>
        <span class="sup">1</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Gehan Hu</span>
        <span class="sup">1, 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Shuangyu Zhu</span>
        <span class="sup">1, 6</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yimou Wu</span><span class="sup">3</span
        ><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Shaohan Jiang</span
        ><span class="sup">1, 3</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Ge Wang</span><span class="sup">1, 3</span
        ><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yuyuan Yang</span><span class="sup">3</span
        ><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Junyuan Tan</span><span class="sup">1</span
        ><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Zhenglin Wan</span><span class="sup">5</span
        ><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Zhen Li</span><span class="sup">1, 2</span
        ><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Shuguang Cui</span><span class="sup">1, 2</span
        ><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yiming Zhao</span
        ><span class="sup">1, 7, 8</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">Yatong Han</span><span class="sup">1, 8</span>
      </div>
    </div>
    <div class="expression">
      <div class="expressionItem">
        <span class="sup"> * </span
        ><span class="expressionText">Equal Contribution</span>
      </div>
    </div>

    <div class="university">
      <div class="universityContainer">
        <span class="sup"> 1 </span
        ><span class="universityName">FNii-Shenzhen </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 2 </span><span class="universityName">SSE </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 3 </span
        ><span class="universityName"
          >The Chinese University of Hong Kong, Shenzhen
        </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 4 </span
        ><span class="universityName">The University of Hong Kong </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 5 </span
        ><span class="universityName">Nanyang Technological University </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 6 </span
        ><span class="universityName"
          >Harbin Institute of Technology, Shenzhen
        </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 7 </span
        ><span class="universityName">Harbin Engineering University </span>
      </div>
      <div class="universityContainer">
        <span class="sup"> 8 </span
        ><span class="universityName">Infused Synapse AI </span>
      </div>
    </div>
    <div class="buttonGroup">
      <button
        class="button"
        onclick="window.open('https://arxiv.org/abs/2508.01415')"
        type="button"
      >
        <div class="arxivIcon"></div>
        arXiv
      </button>
      <!-- <button
        class="button"
        onclick="window.open('https://github.com/SP4595/CLEA-Closed-Loop-Embodied-Agent')"
        type="button"
      >
        <div class="gitHubIcon"></div>
        Code
      </button> -->
      <button
        class="button unfinished"
        onclick="window.alert('Code will be released soon!')"
        type="button"
      >
        <div class="gitHubIcon"></div>
        Code
      </button>
      <!-- <button class="button">
        <div class="huggingFaceIcon"></div>
        buttonGroup.huggingFaceButton
      </button> -->
    </div>
  </div>
  <div class="videoDisplayContainer contentContainer coverVideo">
    <video muted playsinline loop controls disable-picture-in-picture="true">
      <source src="./assets/mp4/RoboMemory_compressed.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="articleMainBodyContainer contentContainer">
    <div class="contentMainTitle">Abstract</div>
    <div class="content">
      Embodied agents face persistent challenges in real-world environments,
      including partial observability, limited spatial reasoning, and
      high-latency multi-memory integration. We present RoboMemory, a
      brain-inspired framework that unifies Spatial, Temporal, Episodic, and
      Semantic memory under a parallelized archi tecture for efficient
      long-horizon planning and interactive environmental learn ing. A dynamic
      spatial knowledge graph (KG) ensures scalable and consistent memory
      updates, while a closed-loop planner with a critic module supports
      adaptive decision-making in dynamic settings. Experiments on EmbodiedBench
      show that RoboMemory, built on Qwen2.5-VL-72B-Ins, improves average
      success rates by 25% over its baseline and exceeds the closed-source
      state-of-the-art (SOTA) Gemini-1.5-Pro by 3%. Real-world trials further
      confirm its capacity for cumulative learning, with performance improving
      across repeated tasks. These results highlight RoboMemory as a scalable
      foundation for memory-augmented embodied intelligence, bridging the gap
      between cognitive neuroscience and robotic autonomy.
    </div>

    <!-- <div class="codeSpace">
      <pre>
        
        <code>
@article{ xxxxxxxxxxx, 
  title={titleCodeMode},
  author={ {authore} name list of all authors}, 
  journal = {arXiv preprint arXiv:arxivCODE}, year={2025}, 
}
        </code>
      </pre>
    </div> -->
  </div>
  <div class="articleMainBodyContainer contentContainer">
    <div class="contentImg contentImg1">
      <img src="./assets/pic/fig1_og.png" alt="image" />
      <div class="introText">
        <span class="bold">Figure 1:</span> The brain-inspired architecture of
        the RoboMemory resembles the biological nervous system. It maps
        biological neural components, enabling the agent to interact with
        diverse environments (real-world, Habitat, ALFRED) and robotic hardware
        for long-term planning and lifelong learning.
      </div>
    </div>
  </div>
  <div class="articleMainBodyContainer contentContainer">
    <div class="contentImg contentImg">
      <img src="./assets/pic/fig2.png" alt="image" />
      <div class="introText">
        <span class="bold">Figure 2: RoboMemory architecture. </span>(a) Left:
        Parallel Step Summarizer and Query Generator generate updates/queries
        for Comprehensive Embodied Memory. These memories enable Closed Loop
        Planning for tasks like “slice and pick up the apple”—the Planner
        generates plans, while the Critic and memories adjust decisions via
        feedback from visual inputs/results. (b) Right: Spatial memory maintains
        a relevance/similarity-updated KG, and Semantic/Episodic memory manages
        a Vector DB with analogous logic. Besides, Temporal memory is
        implemented as a linear FIFO buffer that stores step-wise summaries
        generated by the Step Summarizer. Together, S and Q provide a swift,
        text-based interface between raw sensory data and provide basic
        information in each iteration for RoboMemory’s Comprehensive Embodied
        Memory System.
      </div>
    </div>
  </div>
  <!-- <div class="forecast contentContainer">
    The rest of paper is comming soon...
  </div> -->
</template>

<script setup lang="ts"></script>

<style scoped>
body {
  /* word setting */
  font-family: "Alibaba-puhui-regular";
}
* {
  /* word-break: normal;
  word-wrap: break-word; */
}
/* font */
@font-face {
  font-family: "Alibaba-puhui-regular";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Alibaba-puhui-medium";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "Alibaba-puhui-heavy";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Heavy.ttf") format("truetype");
}
@font-face {
  font-family: "Alibaba-puhui-bold";
  font-display: swap;
  src: url("@/assets/font/Alibaba-PuHuiTi-Bold.ttf") format("truetype");
}
a,
a:active,
a:hover,
a:focus,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.bold {
  font-family: "Alibaba-puhui-bold";
}

.contentContainer {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 960px;
  height: fit-content;
  padding: 5vmax 0;
}
.contentContainer:nth-child(odd):not(:first-child) {
  background-color: #f0f0f0;
}
.contentContainer:nth-child(even) {
  background-color: #ffffff;
}

.forecast {
  display: flex;
  height: 50vmax;
  font-family: "Alibaba-puhui-heavy";
  font-size: 3vmax;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
}
.inProgress {
  display: flex;
  width: 15vmax;
  height: 15vmax;
  background-image: url("@/assets/icon/component/road.png");
  background-size: contain;
  margin-left: 1vmax;
}

.articleTitleContainer {
  padding-top: 5vmax;
}
.articleTitle {
  /* display: flex; */
  /* flex-direction: column; */
  box-sizing: border-box;
  font-family: "Alibaba-puhui-bold";
  font-size: 5vmax;
  color: #363636;
  justify-content: center;
  line-height: 1.5;
  text-align: center;
  padding: 0 15%;
}
.subTitle {
  font-size: 3vmax;
}

.colorStress {
  display: inline;
  color: #209cee;
}

.arthorNameLine {
  display: flex;
  width: 100%;
  font-family: "Alibaba-puhui-medium";
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 20%;
  margin: 2.5vmax 0 0;
  line-height: 1.5;
  font-size: 1.5vmax;
  justify-content: center;
}
.arthorNameContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 0.5vmax;
}
.arthorName {
  color: #209cee;
}
.sup {
  display: flex;
  vertical-align: top;
  flex-shrink: 0;
  font-size: 60%;
  margin-right: 0.25vmax;
  font-family: "Alibaba-puhui-regular";
}
.expression {
  display: flex;
  margin: 1vmax 0 0;
  justify-content: center;
}
.expressionItem {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 0 0.25vmax;
}
.expressionText {
  font-size: 1vmax;
  font-family: "Alibaba-puhui-regular";
}
.university {
  display: flex;
  width: 100%;
  font-family: "Alibaba-puhui-regular";
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 25%;
  margin: 1.5vmax 0 0;
  line-height: 1.5;
  font-size: 1.2vmax;
  justify-content: center;
}
.universityContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 1vmax;
}
.universityName {
  font-family: "Alibaba-puhui-medium";
  color: #535353;
}
.buttonGroup {
  display: flex;
  justify-content: center;
  margin: 1.5vmax 0 2.5vmax;
}
.button {
  display: flex;
  height: 2vmax;
  justify-content: center;
  align-items: center;
  font-family: "Alibaba-puhui-regular";
  border-radius: 1.5vmax;
  border: #363636 solid 0px;
  background-color: #363636;
  color: #ffffff;
  padding: 1.5vmax;
  margin: 0.5vmax;
  font-size: 1vmax;
  cursor: pointer;
}
.button:hover {
  background-color: #474747;
}
.button.unfinished {
  background-color: #707070;
}
.button.unfinished:hover {
  background-color: #808080;
}
.arxivIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/component/arxiv.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 1vmax;
}
.gitHubIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/component/github.png");
  background-size: contain;
  margin-right: 0.5vmax;
}
.huggingFaceIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/component/huggingface.png");
  background-size: contain;
  margin-right: 0.5vmax;
}
.videoDisplayContainer.coverVideo {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
}
.videoDisplayContainer.coverVideo video {
  height: 30vmax;
  aspect-ratio: 16/9;
  margin: 0 0.5vmax;
}

.articleMainBodyContainer {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 4vmax 25%;
}
.contentMainTitle {
  font-family: "Alibaba-puhui-bold";
  font-size: 2vmax;
  color: #363636;
  margin: 0 0 1vmax;
}
.contentSubTitle {
  font-family: "Alibaba-puhui-bold";
  font-size: 1.25vmax;
  color: #363636;
  margin: 0 0 1.5vmax;
}
.content {
  /* display: flex; */
  width: 100%;
  font-family: "Alibaba-puhui-regular";
  font-size: 0.9vmax;
  color: #363636;
  line-height: 1.5;
  margin: 0 0 1vmax;
  /* word-wrap: normal;
  word-break: normal; */
  text-align: justify;
}
.content a {
  color: #209cee;
}
.content a:hover {
  color: #1978b8;
}

.contentImg {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}
.contentImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 1.5vmax;
}
.contentImg .introText {
  font-family: "Alibaba-puhui-regular";
  font-size: 0.85vmax;
  color: #363636;
  line-height: 1.5;
  text-align: justify;
  padding: 0 7.5%;
  margin-bottom: 1.5vmax;
}

.contentImg2 {
  /* flex-direction: row; */
}
.contentImg2 img {
  width: 60%;
}

/* .contentImg2 .introText {
  text-align: justify;
  padding: 0 4vmax;
} */

.codeSpace {
  display: flex;
  width: 100%;
  /* justify-content: center; */
  overflow-x: scroll;
}
pre {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background-color: #d6d6d6;
  padding: 1vmax 0;
}
code {
  display: flex;
  width: 100%;
  font-family: NSimSun;
  font-size: 0.8vmax;
  color: #363636;
  line-height: 1.5;
  padding: 0.5vmax 3vmax;
}
</style>
