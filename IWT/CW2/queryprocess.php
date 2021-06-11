<!-- php starts on line 32 -->

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results</title>
    <link rel="stylesheet" href="styles.css"> <!-- I reused my CW1 styles -->
    <style>
        table{
        color: rgb(41, 41, 41); 
        margin: 0 auto;
        width: 90%;
        }

        th, td {
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid rgb(39, 212, 255);
        }
    </style>

</head>
<body>
    
    <h1>European Populations</h1>

    <table>

    <?php  

        /* function to construct the table head with formated 
        strings by checking if the checkboxes were ticked */
        function constructTableHead() {

            $header = '<tr><th>Country</th>';
            if (isset($_GET['pop'])) {
                $header .= '<th>Total Population</th>';
            }
            if (isset($_GET['birth'])) {
                $header .= '<th>Birth Rate</th>';
            }
            if (isset($_GET['death'])) {
                $header .= '<th>Death Rate</th>';
            }

            $header .= '</tr>';
            return $header;
        }

        /* This function creates the body of the table using simplexml and nested 
        if statements with OR to allow the loop to progress without a value*/
        function generateResults() {

            $location = './cia.xml';
            $xmlParse = simplexml_load_file($location);
    
            foreach ($xmlParse -> country as $item) {

                $totalPop = $item -> people -> population -> total;
                $birthRate = floatval($item -> people -> population -> birth);
                $deathRate = floatval($item -> people -> population -> death);
                $languages = strval($item -> people -> languages);

                if (($_GET['verpop'] >= $totalPop && $_GET['operator'] == '>') || $_GET['operator'] != '>') {
                    if (($_GET['verpop'] <= $totalPop && $_GET['operator'] == '<') || $_GET['operator'] != '<') {
                        if (($birthRate >= $deathRate && $_GET['less/greater'] == 'birth>') || $_GET['less/greater'] != 'birth>') {
                            if (($birthRate <= $deathRate && $_GET['less/greater'] == 'death>') || $_GET['less/greater'] != 'death>') {
                                if (str_contains($languages, ucfirst($_GET['lang']))) {

                                    /* Similar to the head when conditions are checked a table row is 
                                    constructed with if statements checking what checkboxes were used */
                                    $htmlStr = "<tr><td>{$item -> name}</td>";
                                    if (isset($_GET['pop'])) {
                                        $htmlStr .= "<td>{$totalPop}</td>";
                                    }
                                    if (isset($_GET['birth'])) {
                                        $htmlStr .= "<td>{$birthRate}</td>";
                                    }
                                    if (isset($_GET['death'])) {
                                        $htmlStr .= "<td>{$deathRate}</td>";
                                    }
                                    $htmlStr .= '</tr>';
                                    print($htmlStr);
                                }
                            }
                        }
                    }
                }
            }
        }

        print(constructTableHead());
        generateResults();

        ?> 

    </table>

</body>
</html>
