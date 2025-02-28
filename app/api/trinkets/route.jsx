export async function GET() {
  const accessToken = process.env.DIRECTUS_ACCESS_TOKEN;
  const directusUrl = `http://localhost:8055/items/AnekAnek`; 

  if (!accessToken) {
      return new Response("Unauthorized", { status: 401 });
  }

  try {
      const res = await fetch(directusUrl, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
          },
      });

      if (!res.ok) {
          return new Response("Failed to retrieve data", { status: 502 });
      }

      const data = await res.json();
      return new Response(JSON.stringify(data), {
          status: 200,
          headers: {
              "Content-Type": "application/json",
          },
      });
  } catch (error) {
      console.error("Error fetching data:", error);
      return new Response("Server error", { status: 500 });
  }
}