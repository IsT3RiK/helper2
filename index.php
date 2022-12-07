<!DOCTYPE html>
<html>
    
	<head>
		
		
		<link rel="stylesheet" type="text/css" href="Sun.css">
		
		<meta charset="UTF-8">
		<title>Bienvenue sur le Sunaris Helper 3.0 !</title>

	</head>
	<body>
		
		<h1>Sunaris Helper 3.0</h1>
		<h2>Site en dévelopement</h2>
					
		<div class="list">
			<select name="formula" id="formula">
				<option value="">Choisir</option>
				<option value="bronze">Bronze</option>
				<option value="acier">Acier</option>
				<option value="invar">Invar</option>
				<option value="titane">Titane</option>²
				<option value="virenium">Virenium</option>
				<option value="virenium_infused">Virenium infusé</option>
			</select>
		</div>

		<div class="quantitybox" >

			<input type="text"  required = "required" id="quantity" name="quantity">
			<span>Quantité</span>
		</div>
		
		<a href="#" onclick="recipe()" style="--clr:#1e9bff"><span>Calculer</span><i></i></a> 
				
		<div class="col-9 result mb-5 pb-5">

			<ul class="tab-content" id="myTabContent">
			
				<div class="tab-panefade" id="schema" role="tabpanel" aria-selected="true" aria-labelledby="schema-tab">

					<div class="tab-panefade" id="total" role="tabpanel" aria-labelledby="total-tab">
						
						<p id="result-title-total" class="h3"></p>
						<pre id="result-detail-total"></pre>
						<pre id="result-detail-total-stack"></pre>
						<pre id="result-detail-total-stackb"></pre>
					</div>
				</div>
			</ul>

		</div>

		<script src="sunaris.js"></script>
    </body>
</html>
