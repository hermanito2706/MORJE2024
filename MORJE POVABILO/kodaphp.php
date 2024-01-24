<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = $_POST["response"];

    if ($response == "Seveda, grem!") {
        echo "Super, komaj čakam!";
    } else {
        echo "Žal mi je, morda drugič.";
    }
}
?>
