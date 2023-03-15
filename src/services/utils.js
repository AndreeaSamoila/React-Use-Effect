export async function fetchAndParse(input) {
    const response = await fetch(input);
    return response.json();
}