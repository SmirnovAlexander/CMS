# CMS

This repo contains all homeworks from ["Content management system" course](slides).

Below are listed all tasks with links and descriptions.

## Homework 1. 
28.09.19

[Data sources slides](slides/05_Анализ%20данных_Источники%20данных.pptx)

- [1.1](DataVisualization/notebooks/RegressionEnergyConsumption.ipynb)

   Find and visualize data for prediction.

- [1.2](DataVisualization/notebooks/ClusteringMallCustomers.ipynb)

   Find and visualize data for clustering.

- [1.3](DataVisualization/notebooks/SurveyVisualization.ipynb)

   Make social survey and visualize it's results.


## Homework 2. 
12.10.19

[Data preparation slides](slides/06_Анализ%20данных_Подготовка%20данных.pptx)

[Describal statistics slides](slides/07_Анализ%20данных_Описательные%20статистики.pptx)

 - [2.1](DataAnalysis/notebooks/MallCustomersOutliersDetection.ipynb)
 
   Calculate dispertion, standart deviation and outlier in one of your datasets. Approximate values after outlier deletion. Visualize results (was/now).

 - [2.2](DataAnalysis/notebooks/NewbornNamesBoxPlots.ipynb)

   Find data about baby's names born in Moscow in 2015. Draw 3 box plot diagrams for your's and your's parents names. Detect whether there were outliers or not (moderate or extreme for this period).

## Homework 3. 
26.10.19

[Data visualization slides](slides/08_Анализ%20данных_Визуализация%20данных.pptx)

[Data norming and conversioning](slides/09_Анализ%20данных_Преобразование%20%20и%20нормировка%20данных.pptx)

 - [3.1](AnimatedVisualizationAndFlatRent/notebooks/InteractiveVisualizations.ipynb)
   
   Visualize one of your datasets in an interactive animated way (examples can be seen in google charts).   
   
 - [3.2](AnimatedVisualizationAndFlatRent/notebooks/FlatOptionsAnalyzing.ipynb)
   
   Semen want to rent a flat. You're given 3 equivalent params: distance to subway (minutes), number of subway station to get to work, rent price (thousands rubles). Way from flat to subway should not exceed 20 minutes. Choose 3 best options.
   
## Homework 4. 
09.11.19

[Main ML tasks](slides/10_Анализ%20данных_Основные%20задачи%20МО.pptx)

[Example of building simpliest model](slides/11_Анализ%20данных_Пример%20построения%20простейшей%20модели.pptx)

[Models comparison](slides/12_Анализ%20данных_Оценка%20качества%20прогнозирования.pptx)

 - [4.1](FlatPricePrediction/notebooks/FlatPricePrediction.ipynb)
   
   Build 3 models for flat price prediction:
      - Price based on square meters number
      - Price based on subway distance
      - Price based on both square meters number and subway distance
   
   For 1st and 2nd models draw both train data and predicted outputs. Compare real results with model outputs using all metrics from slides.
   
## Homework 5. 
23.11.19

[Classification](/slides/13_Анализ%20данных_Классификация.pptx)

[Estimation of quality classification metrics](/slides/14_Анализ%20данных_Оценка%20качества%20классификации.pptx)

[Clustering](/slides/15_Анализ%20данных_Кластеризация.pptx)

[Clustering (p. 2)](/slides/16_Анализ%20данных_Кластеризация%20(продолжение).pptx)

 - [5.1](ClassificationAndClustering/notebooks/IrisClassification.ipynb)
   
   Download [Iris data](http://archive.ics.uci.edu/ml/datasets/Iris).
   
   Divide data on 2 sets (25 samples of each class in set). Classify samples of 2nd set based on data from 1st set. Show classification results in 2D dotten plots on petals and sepala. Compare classification results with facts and estimate classification quality.
   
 - [5.2](ClassificationAndClustering/notebooks/ClusterAnalysis.ipynb)
 
   1) Make set of dots on a plane with several jellieses.
   2) Apply to this dataset algorithms k-means and Dbscan.
   3) Visualize results.
   4) Estimate clustering quality results with silhouette metric.
   
 - [5.3](ClassificationAndClustering/notebooks/AgglomerativeClustering.ipynb)
 
   1) Make set of dots on a plane with several jellieses.
   2) Apply to this dataset agglomerative algorithm until unioning into 1 cluster.
   3) Make table and plot of silhouette metric changing.
   4) Visualize partition that corresponds to best metric value.

## Homework 6. 
07.12.19

[Distance metrics](/slides/17_Анализ%20данных_Метрики%20расстояний%20для%20различных%20шкал.pptx)

[Time series analysis](/slides/18_Анализ%20временных%20рядов.pptx)

[Time series smoothing](/slides/19_Сглаживание%20временных%20рядов.pptx)

[Time series trends detection](/slides/20_Определение%20трендов%20временных%20рядов.pptx)

[Modelling time series with seasonal components](/slides/21_Моделирование%20временных%20рядов%20с%20сезонными%20составляющими.pptx)

[Time series clustering](/slides/22_Кластеризация%20временных%20рядов.pptx)

 - [6.1](TimeSeriesPredictions/notebooks/TimeSeriesTrendPrediction.ipynb)
   
   1) Find or model time seies.
   2) Build smoothed time series.
   3) Build correct trend for time series.
   4) Define trend determination coefficent.
   5) Predict (and show on plot) 5 predict values.
   6) Estimate prediction with MAPE metric.
   
 - [6.2](TimeSeriesPredictions/notebooks/TimeSeriesSeasonalPrediction.ipynb)
 
   1) Find or model time series with seasonal components (more than 3 periods).
   2) Come up with time series model.
   3) Use model for prediction for 4 periods.
   4) Visualize initial series and prediction.
   5) Estimate prediction with MAPE metric.
