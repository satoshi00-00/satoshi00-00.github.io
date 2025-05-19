document.getElementById('searchButton').addEventListener('click', () => {
  const input = document.getElementById('searchInput').value.trim();
  const normalizedInput = normalizeArea(input);
  const resultArea = document.getElementById('resultArea');
  resultArea.innerHTML = '';

  if (!input) {
    resultArea.innerHTML = '<p>市区町村名を入力してください。</p>';
    return;
  }

  const result = helloWorkData.find(entry =>
    entry.areas.some(area => normalizeArea(area).includes(normalizedInput))
  );

  if (result) {
    resultArea.innerHTML = `
      <h2>${result.name}</h2>
      <p><strong>住所：</strong>${result.address}</p>
      <p><strong>電話番号：</strong>${result.phone}</p>
      <p><strong>部門コード：</strong>${result.departmentCode}</p>
      <p><a href="${result.url}" target="_blank">詳細ページ</a></p>
    `;
  } else {
    resultArea.innerHTML = '<p>該当するハローワークが見つかりませんでした。</p>';
  }
});

// 入力とエリア名を共通化する関数（末尾の「区」「市」「郡」を無視）
function normalizeArea(area) {
  return area.replace(/(区|市|郡)$/, '').toLowerCase();
}
