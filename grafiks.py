import matplotlib.pyplot as plt
import numpy as np

# Data: pH ranges and activity levels for the enzymes
pH = np.linspace(1, 12, 500)

# Simulated activity curves for pepsin, amylase, and trypsin
pepsin_activity = np.exp(-((pH - 2)**2) / 2)  # Peak activity near pH 2
amylase_activity = np.exp(-((pH - 7)**2) / 2)  # Peak activity near pH 7
trypsin_activity = np.exp(-((pH - 8)**2) / 2)  # Peak activity near pH 8

# Plot
plt.figure(figsize=(8, 6))
plt.plot(pH, pepsin_activity, label="Pepsīns", color="blue", linewidth=2)  # Pepsin
plt.plot(pH, amylase_activity, label="Amilāze, maltāze", color="green", linewidth=2)  # Amylase
plt.plot(pH, trypsin_activity, label="Tripsīns, lipāze", color="red", linewidth=2)  # Trypsin

# Graph formatting
#plt.title("Enzyme Activity vs. pH", fontsize=14)
plt.xlabel("pH", fontsize=12)
plt.ylabel("Relatīvā aktivitāte", fontsize=12)
plt.xlim(0, 12)
plt.ylim(0, 1.1)
#plt.grid(alpha=0.3)
plt.legend(fontsize=10, loc="lower left", frameon=False)

# Save as SVG
plt.savefig("pH.svg", format="svg")

plt.show()
