<script setup>
definePageMeta({
  // layout: 'default',
  // name: 'volunteer',
  // alias: 'volunteer',
  title: 'Book Appointment',
  description: "Schedule Your Eye Exam Today for Clearer, Healthier Vision.",
  navOrder: '6',
  type: 'secondary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})

const formData = reactive({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  preferred_date: "",
  preferred_time: "",
  alternate_date: "",
  reason_for_visit: "",
  hmo: "",
  new_patient: "",
});

const mail = useMail();

const sendMessage = async () => {
  try {
    await mail.send({
      from: `${formData.first_name} <${formData.email}>`,
      subject: "Appointment Request",
      text: JSON.stringify(formData),
    });
    console.log(JSON.stringify(formData));
    resetForm();
  } catch (error) {
    console.error(error);
  }
};

const resetForm = () => {
  formData.first_name = "";
  formData.last_name = "";
  formData.email = "";
  formData.phone = "";
  formData.preferred_date = "";
  formData.preferred_time = "";
  formData.alternate_date = "";
  formData.reason_for_visit = "";
  formData.hmo = "";
  formData.new_patient = "";
};
</script>
<template>
  <div class="pb-12">
    <div class="py-10 text-center bg-sky-100 dark:bg-sky-700 text-sky-900 dark:text-sky-100">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap">
          <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
            <div class="px-6 py-12 rounded-lg tertiary-card">
              <h2 class="font-bold leading-tight mb-2 text-3xl">
                Book Appointment
              </h2>
              <p>
                Schedule Your Eye Exam Today for Clearer, Healthier Vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form class="mx-auto sm:w-9/12 xl:w-8/12 bg-white p-6 rounded-lg" data-drip-embedded-form="243852739">

      <!-- Personal Information Section -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Personal Information</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Name Fields -->
          <div>
            <label for="firstName" class="block text-sm font-medium mb-1">First Name</label>
            <input id="firstName" v-model="formData.first_name"
              class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              type="text" required name="fields[first_name]" placeholder="John">
          </div>

          <div>
            <label for="lastName" class="block text-sm font-medium mb-1">Last Name</label>
            <input id="lastName" v-model="formData.last_name"
              class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              type="text" required name="fields[last_name]" placeholder="Doe">
          </div>
        </div>

        <!-- Contact Information -->
        <div class="mt-4">
          <label for="emailfield" class="block text-sm font-medium mb-1">Email Address</label>
          <input id="emailfield" v-model="formData.email"
            class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            type="email" required name="fields[email]" placeholder="email@example.com">
        </div>

        <div class="mt-4">
          <label for="phone" class="block text-sm font-medium mb-1">Phone Number</label>
          <input id="phone" v-model="formData.phone"
            class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            type="tel" required name="fields[phone]" placeholder="080 1234 5678">
        </div>
      </div>

      <!-- Appointment Details Section -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Appointment Details</h3>

        <!-- Date and Time Selection -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label for="appointment-date" class="block text-sm font-medium mb-1">Preferred Date</label>
            <input id="appointment-date" v-model="formData.preferred_date"
              class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              type="date" required name="fields[preferred_date]" min="2025-03-09">
          </div>

          <div>
            <label for="appointment-time" class="block text-sm font-medium mb-1">Preferred Time</label>
            <select id="appointment-time" v-model="formData.preferred_time"
              class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required name="fields[preferred_time]">
              <option value="" disabled selected>Select a time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 6PM)</option>
            </select>
          </div>
        </div>

        <!-- Alternative Date -->
        <div class="mt-4">
          <label for="alt-date" class="block text-sm font-medium mb-1">Alternative Date (Optional)</label>
          <input id="alt-date" v-model="formData.alternate_date"
            class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            type="date" name="fields[alternative_date]" min="2025-03-09">
        </div>
      </div>

      <!-- Additional Information -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Additional Information</h3>

        <div>
          <label for="reason" class="block text-sm font-medium mb-1">Reason for Visit</label>
          <textarea id="reason" v-model="formData.reason_for_visit"
            class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            rows="3" name="fields[reason_for_visit]"
            placeholder="Please briefly describe your reason for booking this appointment..." />
        </div>

        <div class="mt-4">
          <label for="insurance" class="block text-sm font-medium mb-1">Insurance Provider (Optional)</label>
          <input id="insurance" v-model="formData.hmo"
            class="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            type="text" name="fields[insurance_provider]" placeholder="Your HMO company name">
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <input id="new-patient" v-model="formData.new_patient"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" type="checkbox"
              name="fields[new_patient]" value="yes">
            <label for="new-patient" class="ml-2 block text-sm text-gray-900">I am a new patient</label>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center">
        <BaseButton size="md" label="Book Appointment" @click="sendMessage">
          <div class="inline-block ml-1 p-1.5">Request Appointment</div>
        </BaseButton>
      </div>

      <p class="mt-4 text-sm text-gray-500 text-center">
        Note: This request does not guarantee an appointment. We will contact you to confirm availability.
      </p>
    </form>
  </div>
</template>
<style scoped></style>
