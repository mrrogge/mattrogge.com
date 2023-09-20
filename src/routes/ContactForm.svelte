<script>
	import { browser } from '$app/environment';
</script>

<div class="flex flex-col items-center">
	<div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md drop-shadow-sm">
		<div class="text-center text-2xl font-bold m-2">Got questions? Let's get in touch.</div>
		<div class="m-7">
			<form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
				<input type="hidden" name="access_key" value="b16e2f27-1031-41f6-a36d-5a12b11316cf" />
				<input type="hidden" name="subject" value="New Submission from mattrogge.com" />
				<input type="hidden" name="redirect" value="https://web3forms.com/success" />
				<input type="checkbox" name="botcheck" id="" class="hidden" />
				<div class="mb-6">
					<label for="name" class="block mb-2 text-sm text-zinc-500">Full Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Rusty Shackleford"
						required
						class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-300"
					/>
				</div>
				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm text-zinc-500">Email Address</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="you@company.com"
						required
						class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-300"
					/>
				</div>
				<div class="mb-6">
					<label for="phone" class="text-sm text-zinc-500">Phone Number</label>
					<input
						type="text"
						name="phone"
						id="phone"
						placeholder="+1 (555) 867-5309"
						class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-300"
					/>
				</div>
				<div class="mb-6">
					<label for="message" class="block mb-2 text-sm text-zinc-500">Your Message</label>

					<textarea
						rows="5"
						name="message"
						id="message"
						placeholder="Your Message"
						class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-300"
						required
					/>
				</div>
				<div class="mb-6">
					<button
						type="submit"
						class="w-full px-3 py-4 text-white bg-sky-800 rounded-md focus:ring-sky-200 focus:border-sky-300"
					>
						Send Message
					</button>
				</div>
				<p class="text-base text-center text-zinc-500" id="result" />
			</form>
		</div>
	</div>
</div>
