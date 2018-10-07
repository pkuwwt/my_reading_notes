
# Reinforcement Learning

## Introduction

### Basic Idea

Two basic questions:
  * How to interact with environment effectively? **exploration** vs. **exploitation**, **sample efficiency**
  * How to learn experience effectively? **Long-term credits assignment**, **sparse reward signals**

### RL as an optimization problem

### Policy Gradient

#### REINFORCE algorithm
REINFORCE algorithm is the RL method used in AlphaGO.

### Model-based vs. Model-free

### Deterministic vs. Stochastic

### Action-based vs. Policy-based

## Advanced RL

### Deep Q-Learning

#### DQN

\[
Q(s_t,a) \leftarrow Q(s_t,a) + \alpha\left[r_{t+1}+\gamma\max_pQ'(s_{t+1},p)-Q(s_t,a)\right]
\]

where $Q'$ is the less frequently updated version of  $Q$.

#### A3C

### Hierarchical RL

  * [HIRO](https://arxiv.org/pdf/1805.08296.pdf) by Google Brain

### Memory and Predictive modeling

### Model-based and Model-free combined

# References

  * Reinforcement Learning: An Introduction, by Richard S. Sutton. [PDF](http://incompleteideas.net/book/bookdraft2017nov5.pdf)
  * [Beyond DQN/A3C: A Survey in Advanced Reinforcement Learning](https://towardsdatascience.com/advanced-reinforcement-learning-6d769f529eb3)
  * [【高级强化学习综述】层次强化学习、记忆与预测模型](https://mp.weixin.qq.com/s/V7RESEm4xzhW8tXEjKjn1Q)
