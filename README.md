# World-Rank 🌍

This repository, **World-Rank**, is a Next.js project designed to display and interact with country-related data. It leverages modern web development practices and a component library (Shadcn UI) for a polished user interface.

## 🚀 Features

*   **Comprehensive Country Data:** Access and view a wide range of information about countries worldwide.
*   **Interactive Rankings:** Explore and compare countries based on various ranking metrics.
*   **Responsive Design:** Optimised for seamless viewing across different devices.
*   **Modern UI Components:** Built with a curated set of UI components for an intuitive user experience.
*   **Fast Development:** Bootstrapped with `create-next-app` for efficient development.

## Challenges Faced

* Sorting and filtering mismatch leading to inconsistent behaviour
* Use of cacheComponents and generateStaticParams() caused an overload during build due to too many API requests, leading to build failure and crash. Had to make components dynamic and cache the fetched data, revalidating after 24 hours.

## 🔗 Link
https://world-rank-p.vercel.app/
