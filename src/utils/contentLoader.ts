export async function loadContent(): Promise<any> {
  try {
    const response = await fetch("/content.json");
    if (!response.ok) {
      throw new Error(`Failed to load content.json: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading content:", error);
    throw error;
  }
}