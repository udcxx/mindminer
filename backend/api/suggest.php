<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['data'])) {
    http_response_code(400);
    echo json_encode(['error' => 'dataキーがありません']);
    exit;
}

$input_data = json_encode($input['data'], JSON_UNESCAPED_UNICODE);

function debug($data){
    $time = new DateTime('now', new DateTimeZone('Asia/Tokyo'));

    ob_start();
    echo '------------------------------', PHP_EOL;
    echo $time->format('Y年m月d日 H時i分s秒'), PHP_EOL;
    echo '------------------------------', PHP_EOL;
    var_dump($data);
    $dump = ob_get_contents();
    ob_end_clean();
    file_put_contents("./debug.log", $dump, FILE_APPEND);
}

include_once('./secretkeys.php');

$body = [
  'model' => 'gpt-4.1-nano',
  'messages' => [[
    'role' => 'user',
    'content' => "次に与えられた {id, text, x, y} のうち、text から連想される単語や短い言葉だけを10個列挙してください。想像が広がるような言葉選びをしてください。単語や短い言葉以外は回答しないでください。単語や短い言葉ごとに改行してください。text と同じものは回答しないでください。text に使われている言語で返してください。(x, y) の近さも考慮してください。：{$input_data}"
  ]],
  'temperature' => 0.7
];

$ch = curl_init('https://api.openai.com/v1/chat/completions');
curl_setopt_array($ch, [
  CURLOPT_HTTPHEADER => [
    'Content-Type: application/json',
    "Authorization: Bearer {$apiKey}"
  ],
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => json_encode($body),
  CURLOPT_RETURNTRANSFER => true
]);
$res = curl_exec($ch);
curl_close($ch);

$data = json_decode($res, true);
debug($data);

$text = $data['choices'][0]['message']['content'] ?? '';
$words = array_values(array_filter(array_map(
  fn($l) => trim(preg_replace('/^\d+\.\s*/', '', $l)),
  preg_split('/\R/', $text)
)));

debug($words);

echo json_encode(['data' => $words]);
