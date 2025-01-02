export default async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // async function always returns a promise
  // so if you return a promise, it implicitly chains that promise to the current promise.
  return response.json();
}
