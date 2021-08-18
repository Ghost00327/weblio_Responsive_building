const queries = new URLSearchParams(window.location.search); 
const acceptableQueryKeys = ["utm_source", "utm_medium", "utm_campaign"];

for (const [k, v] of queries) {
    if (!acceptableQueryKeys.includes(k)) {
        continue;
    }
    const cookie =`${k}=${v}; secure; samesite=strict; max-age=${7 * 24 * 60 * 60}; domain=${document.domain}; path=/; `;
    document.cookie = cookie;
}
