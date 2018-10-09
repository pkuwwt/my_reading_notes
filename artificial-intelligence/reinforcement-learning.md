
# Reinforcement Learning

## Introduction

### Basic Idea

Two basic questions:
  * How to interact with environment effectively? **exploration** vs. **exploitation**, **sample efficiency**
  * How to learn experience effectively? **Long-term credits assignment**, **sparse reward signals**

![rl-diagram](https://www.kdnuggets.com/images/reinforcement-learning-fig1-700.jpg)

Elements of RL:

  * Modeling: Agent, States, Actions
  * Elements: Policy, Reward function, Value function, Model of env (optioanl)
  
### Concepts of RL

  * States $\mathcal{S}$
  * Actions $\mathcal{A}$
  * Policy:
    * Deterministic Policy: $\pi_t(s):\mathcal{S}\to\mathcal{A}$
    * Stochastic Policy: $\pi_t(a|s):\mathcal{S}\times\mathcal{A}\to[0,1]$
  * Value function $v_t(s): \mathcal{S}\to\mathbb{R}$
  * Reward after action $A_t\in\mathcal{A}$: $R_{t+1}\in\mathbb{R}$
  * Model of env: expected return, or transitio probability of states
  * Discounting return:
$$
G_t = R_{t+1} + \gamma R_{t+2} + \cdots = \sum_{k=0}^\infty\gamma^kR_{t+k+1}
$$
  * Task:
    * Episodic task: $t=1,2,\cdots T$
    * Continuing Task: $t=1,2,\cdots,\infty$
  

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
  * [Welcome to deep reinforcement learning part 1:  DQN](https://towardsdatascience.com/welcome-to-deep-reinforcement-learning-part-1-dqn-c3cab4d41b6b)
