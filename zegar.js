function odliczanie()
		{
			var dzisiaj = new Date(); 
				var dzien = dzisiaj.getDate();
					if (dzien<10) dzien = "0"+dzien;
				var miesiac = dzisiaj.getMonth()+1;
					if (miesiac<10) miesiac = "0"+miesiac;
				var rok = dzisiaj.getFullYear();
				var godzina = dzisiaj.getHours();
					if (godzina<10) godzina = "0"+godzina;
				var minuta = dzisiaj.getMinutes();
					if (minuta<10) minuta = "0"+minuta;
				var sekunda = dzisiaj.getSeconds();
					if (sekunda<10) sekunda = "0"+sekunda;
			
			var nastepnyRok = dzisiaj.getFullYear()+1;
			
			var end = new Date("01/01/"+nastepnyRok);
				var endDzien = end.getDate();
					if (endDzien<10) endDzien = "0"+endDzien;
				var endMiesiac = end.getMonth()+1;
					if (endMiesiac<10) endMiesiac = "0"+endMiesiac;
				var endRok = dzisiaj.getFullYear()+1;
			
			var milisekundy2 = end.getTime();
			var milisekundy = dzisiaj.getTime();
			
			var pozostalo = milisekundy2 - milisekundy;
			
			var miesiace = 12 - miesiac;
			var dni = Math.floor(pozostalo/86400000); 
			var godziny = Math.floor(pozostalo/3600000);
			var minuty = Math.floor(pozostalo/60000);
			var sekundy = Math.floor(pozostalo/1000);
			
		
			
			document.getElementById("aktualnaData").innerHTML = "Dzień obecny: "+dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda; 
			
			document.getElementById("dataWydarzenia").innerHTML = "Koniec roku: "+endDzien+"/"+endMiesiac+"/"+endRok+" | 00:00:00";
			
			document.getElementById("miesiaceDoWydarzenia").innerHTML ="Do końca roku pozostało: "+miesiace+" miesięcy.";
			
			document.getElementById("dniDoWydarzenia").innerHTML ="Do końca roku pozostało: "+dni+" dni.";
			
			document.getElementById("godzinyDoWydarzenia").innerHTML ="Do końca roku pozostało: "+godziny+" godzin.";
			
			document.getElementById("minutyDoWydarzenia").innerHTML ="Do końca roku pozostało: "+minuty+" minut.";
			
			document.getElementById("sekundyDoWydarzenia").innerHTML ="Do końca roku pozostało: "+sekundy+" sekund.";
			 
			setTimeout("odliczanie()",1000);
		}