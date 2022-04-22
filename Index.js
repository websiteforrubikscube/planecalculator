function Calculate(){
var AirplaneCost = document.getElementById("AirplaneCost").value;
var FuelCost = document.getElementById("FuelCost").value;
var MantCost = document.getElementById("MantCost").value;
var OtherCost = document.getElementById("OtherCost").value;
var FlightCycles = document.getElementById("FlightCycles").value;
var Seats = document.getElementById("Seats").value;
var ProfitMargin = document.getElementById("Profit").value;
var AirplaneCostint=parseInt(AirplaneCost,10);
var FuelCostint=parseInt(FuelCost,10);
var MantCostint=parseInt(MantCost,10);
var OtherCostint=parseInt(OtherCost,10);
var FlightCyclesint=parseInt(FlightCycles,10);
var Seatsint=parseInt(Seats,10);
var ProfitMarginint=parseInt(ProfitMargin,10);
var PerFlightCost=(AirplaneCostint/FlightCyclesint)+(MantCostint/FlightCyclesint)+(ProfitMarginint/FlightCyclesint)+FuelCostint+OtherCostint;
PerFlightCost=Math.round(PerFlightCost);
var SeatCost=Math.round(PerFlightCost/Seatsint);
document.getElementById("TicketPrice").innerHTML="Ticket Price: "+SeatCost;
}