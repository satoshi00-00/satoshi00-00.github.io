const helloWorkData = [
  {
    name: "ハローワーク飯田橋",
    areas: ["千代田区", "中央区", "文京区", "大島町", "八丈町", "利島村", "新島村", "神津島村", "三宅村", "御蔵島村", "青ヶ島村"],
    address: "文京区後楽1丁目9番20号",
    phone: "03-3812-8609",
    departmentCode: "35#",
    url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/iidabashi/madoguchi_goannai.html"
  },
  {
    name: "ハローワーク上野",
    areas: ["台東区"],
    address: "台東区東上野2－7－5 偕楽ビル （東上野Ⅱ） 2F・3F",
    phone: "03-5818-8609",
    departmentCode: "32#",
    url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/ueno.html"
  },
  {
    name: "ハローワーク品川",
    areas: ["港区", "品川区"],
    address: "〒108-0014 港区芝5－35－3",
    phone: "03-5419-8609",
    departmentCode: "32＃",
    url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/shinagawa/madoguchi_goannai.html"
  },
  {
  name: "ハローワーク大森",
  areas: ["大田区"],
  address: "〒143‐8588 東京都大田区大森北4‐16‐7",
  phone: "03-5493-8609",
  departmentCode: "32#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/oomori/madoguchi_goannai.html"
},
{
  name: "ハローワーク渋谷",
  areas: ["目黒区", "世田谷区", "渋谷区"],
  address: "〒150-0041 東京都渋谷区神南1丁目3-5",
  phone: "03-3476-8609",
  departmentCode: "24#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/shibuya/madoguchi.html"
},
{
  name: "ハローワーク新宿",
  areas: ["中野区", "杉並区", "新宿区"],
  address: "東京都新宿区（※住所詳細は明記されていません）",
  phone: "03-3200-8609",
  departmentCode: "32#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/shinjuku/madoguchi_goannai.html"
},
{
  name: "ハローワーク池袋",
  areas: ["豊島区", "板橋区", "練馬区"],
  address: "〒170-8409 東京都豊島区東池袋3－5－13",
  phone: "03-3987-8609",
  departmentCode: "32#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/ikebukuro/info/new_information.html"
},
{
  name: "ハローワーク王子",
  areas: ["北区"],
  address: "東京都北区（詳細住所記載なし）",
  phone: "03-5390-8609",
  departmentCode: "21#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/ouji/madoguchi_goannai.html"
},
{
  name: "ハローワーク墨田",
  areas: ["墨田区", "葛飾区"],
  address: "東京都墨田区錦糸町庁舎",
  phone: "03-5669-8609",
  departmentCode: "33#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/sumida/madoguchi_goannai.html"
},
{
  name: "ハローワーク木場",
  areas: ["江戸川区", "江東区"],
  address: "東京都江東区木場2-13-19",
  phone: "03-3643-8609",
  departmentCode: "32#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/kiba/madoguchi_goannai.html"
},
{
  name: "ハローワーク八王子",
  areas: ["八王子市", "日野市"],
  address: "東京都八王子市子安町1-13-1",
  phone: "042-648-8609",
  departmentCode: "31#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/hachioji/madoguchi_goannai.html"
},
{
  name: "ハローワーク立川",
  areas: ["立川市", "昭島市", "小金井市", "小平市", "東村山市", "国分寺市", "国立市", "東大和市", "武蔵村山市"],
  address: "東京都立川市緑町4-2 立川地方合同庁舎",
  phone: "042-525-8609",
  departmentCode: "32#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/tachikawa/madoguchi_goannai.html"
},
{
  name: "ハローワーク青梅",
  areas: ["青梅市", "福生市", "羽村市", "あきる野市", "西多摩郡"],
  address: "青梅市東青梅3－20－7",
  phone: "0428-24-8609",
  departmentCode: "31#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/oume/madoguchi_goannai.html"
},
{
  name: "ハローワーク三鷹",
  areas: ["三鷹市", "武蔵野市", "清瀬市", "東久留米市", "西東京市"],
  address: "東京都三鷹市下連雀4-15-18（本庁舎）／東京都三鷹市下連雀4-15-31（分庁舎）",
  phone: "0422-47-8609",
  departmentCode: "31#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/mitaka/madoguchi.html"
},
{
  name: "ハローワーク町田",
  areas: ["町田市"],
  address: "東京都町田市森野2-28-14　町田合同庁舎1階",
  phone: "042-732-8609",
  departmentCode: "31#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/machida/madoguchi_goannai.html"
},
{
  name: "ハローワーク府中",
  areas: ["府中市", "調布市", "狛江市", "多摩市", "稲城市"],
  address: "東京都府中市美好町1-3-1",
  phone: "042-336-8609",
  departmentCode: "31#",
  url: "https://jsite.mhlw.go.jp/tokyo-hellowork/list/fuchu/madoguchi_goannai.html"
}
];