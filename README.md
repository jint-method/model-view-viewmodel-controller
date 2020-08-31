# Hierarchical model–view–viewmodel

The Hierarchical model–view–viewmodel attempts to codify Brad Frost's [Atomic Design methodology](http://bradfrost.com/blog/post/atomic-web-design/) using the [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architectural pattern.

# Table of Contents

1. [Overview](#overview)
1. [Structure](#structure)
1. [Usage](#usage)
    1. [Module Lifecycle](#module-lifecycle)
    1. [Communication](#communication)
1. [Examples](#examples)
1. [License](#license)

# Overview

The Hierarchical model–view–viewmodel solves problem *how to work with [modular programming](https://en.wikipedia.org/wiki/Modular_programming)?*

The Hierarchical model–view–viewmodel describes how to:

- Pass information form modules to their submodules
- Pass information from submodule to their parent modules
- Communication between modules

# Structure

The Hierarchical model–view–viewmodel uses a the [model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architecture while borrowing the and [Hierarchical model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model–view–controller) software architectural pattern's "widgetization" contect structure.

![Applicaiton Structure](https://github.com/Pageworks/modular-design-pattern/blob/master/_assets/application-structure-v2.png)

# Usage

### Module Lifecycle

![Module Lifecycle](https://github.com/Pageworks/modular-design-pattern/blob/master/_assets/base-module-lifecycle.png)

### Communication

Local controllers can directly communication with other controllers or external controllers. Only parent controllers are allowed to communication with it their viewmodels.

# Examples

[JavaScript](https://github.com/codewithkyle/modular-design-pattern-javascript-example)

