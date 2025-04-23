# Apex Chart Demo 📊⏱️

Eine kleine Angular 19 Demo zur Visualisierung von Live-Daten mit **ApexCharts**. 
Die Diagramme werden in regelmässigen Zeitintervallen aktualisiert und zeigen dynamische Daten.

## 🛠️ Technologien

- Angular 19
- [ng-apexcharts](https://www.npmjs.com/package/ng-apexcharts)
- RxJS (Interval, Observables)
- NgRx (optional zur Zustandsverwaltung)

## 📊 Unterstützte Chart-Typen

- **Balkendiagramm (bar)**
- **Donut-Diagramm (donut)**
- **Radial-Bar-Diagramm (radialBar)**

Alle Diagramme verwenden dieselbe Datenquelle und werden alle paar Sekunden automatisch aktualisiert.

## 🚀 Lokales Setup

```
git clone https://github.com/ronnymundt/apex-chart-demo.git
cd apex-chart-demo
npm install
ng serve
```

## 🎥 Screencast

![Screencast](/src/assets/screencast.gif)
