<script>
export default {
  data() {
    return {
      messages: ["message 1", "message 2"],
      chatBotApiResponse: [
        "I got more than 5 results for candidates currently associated to you. Here are the details of a few of them:<br><br><li><a href=https://dev.thetalentpool.co.in/web/bot/#/96/Technical%20Interview/feedback target=_blank>K.R. SANKARAN</a></li><li><a href=https://dev.thetalentpool.co.in/web/bot/#/860/Face%20to%20face%20interview/feedback target=_blank>SANDIP</a></li><li><a href=https://dev.thetalentpool.co.in/web/bot/#/6/Resume%20Screening2/feedback target=_blank>SANDEEP LAHIRI</a></li><li><a href=https://dev.thetalentpool.co.in/web/bot/#/835/Telephonic%20Interview/feedback target=_blank>HARI KRISHNA GUNTURU</a></li><li><a href=https://dev.thetalentpool.co.in/web/bot/#/871/Telephonic%20Interview/feedback target=_blank>MUHAMMAD AYAZ MUHAMMAD ISMAIL</a></li>",
        "To scale down the search, please provide more details like applicant name, city, institute, position, degree or interview period (e.g. last week).",
      ],
    };
  },
};
</script>

<template>
  <div class="about">
    <div class="response-1 left">
      <el-row>
        <el-col :md="15" :xs="24" :sm="12" :lg="12">
          <div v-if="messages && messages.length" class="messages left">
            <div
              class=""
              v-for="(message, index) in messages"
              v-bind:key="index"
              v-html="message"
            ></div>
            <!-- <candidate-cards v-if="candidateCards && candidateCards.length" :renderer="renderer"
            :candidateCards="candidateCards" class="mt-10"></candidate-cards> -->
            <!-- <appointment-cards class="mt-10" v-if="appointmentData && appointmentData.length"
            :appointmentData="appointmentData"></appointment-cards> -->

            <!--<position-status-card class="mt-10" v-if="positionCards && positionCards.length == 1 && positionCards[0].positionStats" :positionStatusCard="positionCards"></position-status-card>-->
            <!-- <position-cards class="mt-10" v-if="positionCards && positionCards.length"
            :positionCards="positionCards"></position-cards> -->

            <!-- <requisition-cards class="mt-10" v-if="requisitionCards && requisitionCards.length"
            :requisition-cards="requisitionCards"></requisition-cards> -->
            <!-- <stats-cards class="mt-10" v-if="stats && stats.length" :statsCards="stats"></stats-cards> -->
            <!-- <notifications v-if="notificationCards && notificationCards.length > 0" :notificationCards="notificationCards"
            :callback="nextActionCallback"></notifications> -->
          </div>
          <div
            class="messages left"
            v-for="(message, index) in chatBotApiResponse"
            v-bind:key="index"
            v-html="message"
          ></div>
        </el-col>
        <el-col :md="1" :xs="1" :sm="1" :lg="1"></el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.messages {
  background-color: rgb(233, 233, 233);
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
