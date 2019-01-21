<template>
	<svg version="1.1" id="atome" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="-50 71 700 700" style="enable-background:new 0 0 600 600;" xml:space="preserve">
		<g id="atom">
			<g id="noyau">
				<g>
					<circle class="el30" cx="300" cy="300" r="226.5"/>
					<circle class="el31" cx="300" cy="300" r="153.5"/>
					<g>
						<circle class="el32" cx="300" cy="300" r="84.5"/>
						<path d="M300,216c46.32,0,84,37.68,84,84s-37.68,84-84,84s-84-37.68-84-84S253.68,216,300,216 M300,215c-46.94,0-85,38.06-85,85
							s38.06,85,85,85s85-38.06,85-85S346.94,215,300,215L300,215z"/>
					</g>
				</g>
				<g>
					<g id="proton">
						<g>
							<circle class="el33" cx="280" cy="354" r="21.5"/>
							<polygon class="el34" points="291.5,352.5 282,352.5 282,343 278,343 278,352.5 268.5,352.5 268.5,356.5 278,356.5 278,366 
								282,366 282,356.5 291.5,356.5 					"/>
						</g>
						<g>
							<circle class="el33" cx="339" cy="330" r="21.5"/>
							<polygon class="el34" points="350.5,328.5 341,328.5 341,319 337,319 337,328.5 327.5,328.5 327.5,332.5 337,332.5 337,342 
								341,342 341,332.5 350.5,332.5 					"/>
						</g>
						<g>
							<circle class="el33" cx="252" cy="270" r="21.5"/>
							<polygon class="el34" points="263.5,268.5 254,268.5 254,259 250,259 250,268.5 240.5,268.5 240.5,272.5 250,272.5 250,282 
								254,282 254,272.5 263.5,272.5 					"/>
						</g>
						<g>
							<circle class="el33" cx="313" cy="241" r="21.5"/>
							<polygon class="el34" points="324.5,239.5 315,239.5 315,230 311,230 311,239.5 301.5,239.5 301.5,243.5 311,243.5 311,253 
								315,253 315,243.5 324.5,243.5 					"/>
						</g>
						<g>
							<circle class="el33" cx="306" cy="298" r="21.5"/>
							<polygon class="el34" points="317.5,296.5 308,296.5 308,287 304,287 304,296.5 294.5,296.5 294.5,300.5 304,300.5 304,310 
								308,310 308,300.5 317.5,300.5 					"/>
						</g>
					</g>
					<g id="neutrons">
						<circle class="el35" cx="246" cy="319" r="21.5"/>
						<circle class="el35" cx="350" cy="278" r="21.5"/>
					</g>
				</g>
			</g>
			<g id="elecs3">
				<g>
					<circle class="el39" cx="306" cy="146" r="21.5"/>
					<rect x="294.5" y="144.5" class="el34_" width="23" height="4"/>
				</g>
				<g>
					<circle class="el39" cx="454" cy="300" r="21.5"/>
					<rect x="442.5" y="298.5" class="el34_" width="23" height="4"/>
				</g>
				<g>
					<circle class="el39" cx="418" cy="397" r="21.5"/>
					<rect x="406.5" y="395.5" class="el34_" width="23" height="4"/>
				</g>
				<g>
					<circle class="el39" cx="146" cy="287" r="21.5"/>
					<rect x="134.5" y="285.5" class="el34_" width="23" height="4"/>
				</g>
				<g>
					<circle class="el39" cx="258" cy="447" r="21.5"/>
					<rect x="246.5" y="445.5" class="el34_" width="23" height="4"/>
				</g>
				<g class='new'>
					<circle class="el39" cx="258" cy="447" r="21.5"/>
					<rect x="246.5" y="445.5" class="el34_" width="23" height="4"/>
				</g>
			</g>
		</g>
	</svg>
</template>

<script>
import { TimelineMax } from 'gsap'
export default {
	mounted() {
		const elecs = document.getElementById('elecs3')
		const sign = document.getElementsByClassName('el34_')
		const tlelec1 = new TimelineMax({onComplete: () => {tlelec1.restart()}})
		const tlsign = new TimelineMax({onComplete: () => {tlsign.restart()}})

		tlelec1
		.fromTo(elecs, 3, {rotation: 0, transformOrigin: '50% 50%', ease: Linear.easeNone},
						  {rotation: 360, transformOrigin: '50% 50%', ease: Linear.easeNone})
		tlsign
		.fromTo(sign, 3, {rotation: 360, transformOrigin: '50% 50%', ease: Linear.easeNone},
						  {rotation: 0, transformOrigin: '50% 50%', ease: Linear.easeNone})
	}
}
</script>

<style type="text/css">
	.el30{fill:#F2F2F2;stroke:#808080;stroke-miterlimit:10;}
	.el31{fill:#F2F2F2;stroke:#E6E6E6;stroke-miterlimit:10;}
	.el32{fill:#999999;}
	.el33{fill:#E55442;stroke:#808080;stroke-miterlimit:10;}
	.el34,el34_{fill:#000000;stroke-miterlimit:10;}
	.el35{fill:#4FB554;stroke:#808080;stroke-miterlimit:10;}
	.el39{fill:#65BAF5;stroke:#808080;stroke-miterlimit:10;}
	.new{transform: translate(70px,0px)}
</style>