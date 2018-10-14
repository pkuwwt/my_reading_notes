
# Shor Algorithm

The factoring algorithm for a number $N$ has complexity $O(\sqrt{N})$, i.e. $O(e^k)$, where $k=\log_2N$ is the input size
of the algorithm.

## Algorithm

Given a large positive integer $N$, find its prime factor $p$:

  * Psedo-Randomly select a number $a<N$, assuming $GCD(a,N)=1$ (or we are done)
  * Use **Quantom Fourier Transform** (QFT) to find the (minimal) period $r$ of $f(x)=a^x | mod N$
  * Assume $r$ is even (or we repeat again), and $a^{r/2}+1\equiv 0 mod N$ (or we are done), compute $GCD(a^{r/2}\pm1,N)$
    * Because $r$ is the smallest period, $a^{r/2}-1$ cannot be the factor of $N$.
    
## Quantum Fourier Transform (QFT)

Input a vector of $a$, $a^2$, $\cdots$, $a^n$, $\cdots$, output a vector of magnitude of frequency for each frequent. 
The biggest one is the possible period.

Because the period is a global property, so we can compute it statistically/parallelly.

## Reference

  * [Shor's factoring algorithm](https://www.quantiki.org/wiki/shors-factoring-algorithm?from=singlemessage&isappinstalled=0)
  * [Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer, Peter W. Shor](http://www.arxiv.org/abs/quant-ph/9508027)
  * [Shor, I'll do it](https://www.scottaaronson.com/blog/?p=208&from=singlemessage&isappinstalled=0) 
  
