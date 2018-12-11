<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculator using OOP PHP</title>
    <style>
        .container {
            width: 1000px;
            margin: 0px auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="headline">
            <h1>OOP Calculator</h1>
        </div>
        <div class="input-field">
            <form action="inc/getvalue.php" method="post">
                <input type="number" name="number1" id="">
                <input type="number" name="number2" id="">
                <select name="Select">
                    <option value="add" id="">Add</option>
                    <option value="sub" id="">Subtract</option>
                    <option value="mul" id="">Multiply</option>
                </select>
                <input type="submit" value="Submit">
            </form>
        </div>

    </div>
</body>
</html>