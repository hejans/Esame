<html>
<head>
</head>
<body>
	<!--button id="b1" onclick="showform()">Show Form</button><br><br>-->
	<h1>Gestione Utenti</h1>
	<form id="form1" action="/" method="post">
		<label id="l1">Name:</label> <input name="username" type="text" id="name">
		<label id="l2">Surname:</label> <input name="surname" type="text"  id="surname">
		<label id="l3">Level:</label> <input name="level" type="text" id="level">
		<label id="l4">Salary:</label> <input name="salary" type="text" id="salary">
		<label id="l5">Id:</label> <input name="iid" type="text" id="id">
		<button type="submit" id="send">Send</button><br>
		<input type="radio" name="stype" id="search">Search
	    <br><br>
	    <label>Name: (:Name:)</label><br>
	    <label>Surname: (:Surname:)</label><br>
	    <label>Level: (:Level:)</label><br>
	    <label>Salary: (:Salary:)</label><br>
	    <label>Id: (:Id:)</label>
	</form>
	
<!--	<script src="script1.js"></script> -->
	
</body>
</html>